var express = require('express');
var router = express.Router();
var d3 = require("d3");

const apiCallFromRequest = require("../request");
const apiCallFromNode = require("../call");

var request = require('request');

// var response = apiCallFromRequest;

/*apiCallFromRequest.callApi(function(response) {
    console.log(response);
});*/

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'One Piece Data - Accueil'});
});


/* GET chapitres */
router.get('/chapitres', function(req, res, next) {

  apiCallFromRequest.callApi(function(response) {
    res.render('chapitre', { title: 'One Piece Data - Chapitres',
                             resp: response
  });
});

});

/* GET personnages */
router.get('/personnages', function(req, res, next) {

  apiCallFromRequest.callApi(function(response) {
    res.render('personnage', { title: 'One Piece Data - Personnages',
                                resp: response
                              });
  });

});


/* GET graphe page */
router.get('/graphe', function(req, res, next) {

  apiCallFromRequest.callApi(function(response) {
    res.render('graphe', { title: 'One Piece Data - Graphe',
                           resp: response
                
                ///d3.json(response, function(data) {});
  });

    // d3.json(response, function (data) {

    //   var canvas = d3.select(".dataContainer")
    //   .append("svg")
    //   .attr("height", 700)
    //   .attr("width", 1000);

    //   canvas.selectAll("rect")
    //       .data(data)
    //       .enter()
    //       .append("rect")
    //       .attr("width", function (d)
    //       {
    //           return d.rank * 60;
    //       })
    //       .attr("height", 50)
    //       .attr("y", function(d, i)
    //       {
    //           return i * 80
    //       })
    //       .attr("fill", "red");

  });

});

module.exports = router;


