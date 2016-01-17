
Jobs = new Mongo.Collection('jobs');

// the allow and deny

Jobs.allow({
    // insert
    insert: function(userId, doc){
        return !!userId;
    },
    // update
    update: function(userId, doc){
        return !!userId;
    }
    
});
// the requirements
RequireSchema = new SimpleSchema({
    //title
    title: {
        type: String,
        autoform: {
            icon: "assignment",
        }
    },
    // the descrition
    desc:{
        type: String,
        autoform: {
            type: "textarea",
            icon: "description"
        }
    }
});
// the jobs schema
JobsSchema = new SimpleSchema({
// the name    
    name: {
        type: String,
        
        autoform: {
            icon: "person",
        },
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
   
// the job description
    the_work: {
        type: String,
        
        autoform: {
            type: "textarea",
            icon: "work"
        }
    },  
// the tags     
   tags: {
        type: [String],
        autoform: {
          type: 'tags',
          class: "taggy"
        }
  },
   
// the projects
   requirements: {
        type: [RequireSchema]
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
    
// date    
    postsDate: {
        type: Date,
        label: "Publication Date"
    }
    
    
});

// the hooks
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



AutoForm.addHooks('jobs-create',bookmarker );
AutoForm.addHooks('jobs-create',postHooks );
AutoForm.addHooks('jobs-create',postHooksForDate );

// redirect to the desired page
AutoForm.addHooks(['jobs-create'],{
    onSuccess: function(formType, result) {
        Router.go('job.show',{_id: this.docId});
    }
});
Jobs.attachSchema( JobsSchema );