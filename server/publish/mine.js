// the myjobs publish method
Meteor.publish('myjobs', function(){
   return Jobs.find({userIntel : this.userId}); 
});

// the myprofile publish method

// the myjobs publish method
Meteor.publish('myprofile', function(){
   return Profiles.find({userIntel : this.userId}); 
});