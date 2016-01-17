//my jobs and profiles section
Template.mine.onCreated(function() {
  var self = this;
  // the my jobs autorun
  self.autorun(function(){
    self.subscribe('myjobs');
  });
  // the my profiles autorun
  self.autorun(function(){
    self.subscribe('myprofile');
  });
});

Template.mine.helpers({
  myjobs: function(){
    return Jobs.find({}, {sort: {postsDate:-1}});
  },
 myprofiles: function(){
    return Profiles.find({}, {sort: {postsDate:-1}});
  }
});