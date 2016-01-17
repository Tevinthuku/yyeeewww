Template.searchpeople.helpers({
  PeopleIndex: () => PeopleIndex // instanceof EasySearch.Index
});

// the people index
PeopleIndex = new EasySearch.Index({
  collection: Profiles,
  fields: ['name', 'status', 'email', 'heading', 'description'],
  engine: new EasySearch.Minimongo()
});

// search jobs
Template.searchpeople.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('profile');
  });
});