// router main
Router.route('/',{
    name: "main",
    template:"main"
});

//layout route
Router.configure({
    layoutTemplate: 'layout'
});

// the home layout
Router.route('/home');

// the people layout
Router.route('/people');

// the jobs route
Router.route('/jobs');

// the search route
Router.route('/search');

// the posts route
Router.route('/posts');

// the jobdetails route

Router.route('/jobdetails/:_id',{
    
    name: 'job.show',
    template: 'jobdetails',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentJob = this.params._id;
    return Meteor.subscribe('jobs', currentJob);
  },
    data: function(){
        var currentJob = this.params._id;
        return Jobs.findOne({ _id: currentJob});
    }
});

// the login route
Router.route('/login');

// the create route
Router.route('/create');

// the profile create route
Router.route('/profile');

// people details route
Router.route('/peopledetails/:_id',{
    
    name: 'peopledetails',
    template: 'peopledetails',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentProfile = this.params._id;
    return Meteor.subscribe('profile', currentProfile);
  },
    data: function(){
        var currentProfile = this.params._id;
        return Profiles.findOne({ _id: currentProfile});
    }
});

// the job create route route
Router.route('/job');

// the mine create route route
Router.route('/mine');

// the updatejob route
Router.route('/updatejob/:_id',{
    
    name: 'updatejob',
    template: 'updatejob',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentJob = this.params._id;
    return Meteor.subscribe('jobs', currentJob);
  },
    data: function(){
        var currentJob = this.params._id;
        return Jobs.findOne({ _id: currentJob});
    }
});

// people update route
Router.route('/updateprofile/:_id',{
    
    name: 'updateprofile',
    template: 'updateprofile',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentProfile = this.params._id;
    return Meteor.subscribe('profile', currentProfile);
  },
    data: function(){
        var currentProfile = this.params._id;
        return Profiles.findOne({ _id: currentProfile});
    }
});

// the search people
Router.route('/searchpeople');

// the search jobs
Router.route('/searchjobs');

// the about jobs
Router.route('/about');