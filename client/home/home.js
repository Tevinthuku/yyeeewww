Template.home.rendered = function(){
    // the tabs
    $('ul.tabs').tabs();

};

Template.home.events({
    // click the people route
   'click .people': function(){
        Router.go('people');
    },
    // the jobs route
     'click .jobs': function(){
        Router.go('jobs');
    },
});