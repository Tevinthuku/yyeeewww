Template.searchjobs.helpers({
  JobsIndex: () => JobsIndex // instanceof EasySearch.Index
});
// the jobs index
JobsIndex = new EasySearch.Index({
  collection: Jobs,
  fields: ['name', 'title', 'desc', 'name', 'email', 'the_work', 'tags'],
  engine: new EasySearch.Minimongo()
});

// search jobs
Template.searchjobs.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('jobs');
  });
});
