// the update job part

Template.updatejob.events({
    // click the submit button
    
    'click .updatejob': function(){
        Router.go('mine');
    }
});

// update profile

Template.updateprofile.events({
    // click the submit button
    
    'click .updateprofile': function(){
        Router.go('mine');
    }
});