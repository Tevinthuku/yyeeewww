Template.main.rendered = function(){


}

Template.main.events({
    //logout
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    },
    //login 
    'click .login': function(){
        Router.go('login');
    },
    //home route
    'click .home': function(){
        Router.go('home');
    },
    //create route
    'click .create': function(){
        Router.go('create');
    },
    // mine route
    'click .update': function(){
        Router.go('mine');
    }
});