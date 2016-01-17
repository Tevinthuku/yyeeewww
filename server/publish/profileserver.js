Profiles = new Mongo.Collection('profiles');

// the people index
PeopleIndex = new EasySearch.Index({
  collection: Profiles,
  fields: ['name', 'status', 'email', 'heading', 'description'],
  engine: new EasySearch.Minimongo()
});
// the allow and deny

Profiles.allow({
    insert: function(userId, doc){
        return !!userId;
    },update: function(userId, doc){
        return !!userId;
    }
    
});

// the profile publish method
Meteor.publish('profile', function(){
    return Profiles.find();
});

