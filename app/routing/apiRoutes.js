

var friendsData = require("../data/friendsData");

// var waitListData = require("../data/waitinglistData");


//Routing
module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });


  app.post("/api/friends", function(req, res) {

    var totalDifference = 0

    


  //Clear Data

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    // waitListData = [];

    console.log(friendsData);
  });
};
