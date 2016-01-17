// the jobs collection
Jobs = new Mongo.Collection('jobs');

// the jobs index
// the jobs index
JobsIndex = new EasySearch.Index({
  collection: Jobs,
  fields: ['name', 'title', 'desc', 'name', 'email', 'the_work', 'tags'],
  engine: new EasySearch.Minimongo()
});


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

// the jobs publish method
Meteor.publish('jobs', function(){
    return Jobs.find();
});


