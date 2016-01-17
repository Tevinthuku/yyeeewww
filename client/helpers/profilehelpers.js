//job section
Template.people.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('profile');
  });
});

Template.people.helpers({
  profiles: function(){
     return Profiles.find({}, {sort: {postsDate:-1}});
  }
});