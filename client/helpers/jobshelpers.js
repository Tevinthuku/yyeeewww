//job section
Template.jobs.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('jobs');
  });
});

Template.jobs.helpers({
  jobsshow: function(){
    return Jobs.find({}, {sort: {postsDate:-1}});
  }
});