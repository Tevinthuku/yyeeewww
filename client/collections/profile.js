Profiles = new Mongo.Collection('profiles');

// the allow and deny

Profiles.allow({
    insert: function(userId, doc){
        return !!userId;
    },update: function(userId, doc){
        return !!userId;
    }
    
});

ProjectSchema = new SimpleSchema({
    heading: {
        type: String,
        autoform: {
            icon: "navigation"
        }
        },
    description: {
        type: String,
        max: 200,
        autoform: {
          icon: "description", 
          type: "textarea"
        }
         
    },
    
    link: {
        type: String,
        autoform: {
            icon: "http"
        }
    },

    date: {
        type: Date,
        autoform: {
          type:"pickadate",
          icon: "perm_contact_calendar"
        },
    }
});

PostSchema = new SimpleSchema({
// the name    
    name: {
        type: String,
        
        autoform: {
            icon: "person",
        },
    },
// status
   status: {
       type: String,
       
       autoform: {
           icon: "chat_bubble",
       }
   },
// the phone number    
    tel: {
        type: Number,
        
        autoform: {
            icon: "call"
        }
    },
// the email
   email: {
       type: String,
       
       autoform: {
           icon: "mail"
       }
   },
   // the projects
   projects: {
        type: [ProjectSchema]
    },
        inBookmark: {
        type: Boolean,
        defaultValue: false,
        optional: true,
    },

    // user id    
    userIntel: {
        type: String,
        label: "Type your Name",
        autoform: {
            class: "disabled"
        }
    },
    
    
    postsDate: {
        type: Date,
        label: "Publication Date"
    }
    
    
});

var bookmarker = {
    before: {
        insert: function(doc) {
            if(Meteor.userId()){
                doc.inBookmark = false;
            }
            
            return doc;
        }
    }
}
var postHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()){
        doc.userIntel = Meteor.userId();
      }
      
      return doc;
    }
  }
}
var postHooksForDate = {
    before: {
        insert: function(doc) {
            if(Meteor.userId()){
                doc.postsDate = new Date;
            }
            return doc
        }
    }
}



AutoForm.addHooks('add-details-form',bookmarker );
AutoForm.addHooks('add-details-form',postHooks );
AutoForm.addHooks('add-details-form',postHooksForDate );

// redirect to the desired page
AutoForm.addHooks(['add-details-form'],{
    onSuccess: function(formType, result) {
        Router.go('peopledetails',{_id: this.docId});
    }
});
Profiles.attachSchema( PostSchema );