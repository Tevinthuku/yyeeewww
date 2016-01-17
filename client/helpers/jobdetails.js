//job section
Template.jobdetails.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('jobs');
  });
});