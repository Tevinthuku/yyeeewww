Template.create.events({
    // click the people route
   'click .profile': function(){
        Router.go('profile');
    },
    // the jobs route
     'click .job': function(){
        Router.go('job');
    },
    // the update route
    'click .update': function(){
        Router.go('mine');
    }
    
    
});