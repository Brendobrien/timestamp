var express = require('express');
var app = express();

// npm wasn't working on cloud 9 so couldn't format the date:
// var dateformat = require('dataformat');
// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

// home
app.get('/', function (req, res) {
  res.send('<!DOCTYPE html> <!-- saved from url=(0035)https://brendobrien-timestamp.herokuapp.com/ --> <html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Brendobrien\'s Timestamp</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> <script type="text/javascript">try { window.AG_onLoad = function(func) { if (window.addEventListener) { window.addEventListener("DOMContentLoaded", func); } }; window.AG_removeElementById = function(id) { var element = document.getElementById(id); if (element && element.parentNode) { element.parentNode.removeChild(element); }}; window.AG_removeElementBySelector = function(selector) { if (!document.querySelectorAll) { return; } var nodes = document.querySelectorAll(selector); if (nodes) { for (var i = 0; i < nodes.length; i++) { if (nodes[i] && nodes[i].parentNode) { nodes[i].parentNode.removeChild(nodes[i]); } } } }; window.AG_each = function(selector, fn) { if (!document.querySelectorAll) return; var elements = document.querySelectorAll(selector); for (var i = 0; i < elements.length; i++) { fn(elements[i]); }; }; var AG_removeParent = function(el, fn) { while (el && el.parentNode) { if (fn(el)) { el.parentNode.removeChild(el); return; } el = el.parentNode; } }; } catch (ex) { console.error("Error executing AG js: " + ex); }</script></head> <body> <div class="container"> <h1 class="header"> API Basejump: Timestamp microservice </h1> <blockquote> User stories: <ul>1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</ul> <ul>2) If it does, it returns both the Unix timestamp and the natural language form of that date.</ul> <ul>3) If it does not contain a date or Unix timestamp, it returns null for those properties.</ul> </blockquote> <h3>Example usage:</h3> <code>https://brendobrien-timestamp.herokuapp.com/December%2015,%202015</code><br> <code>https://brendobrien-timestamp.herokuapp.com/1450137600</code> <h3>Example output:</h3> <code> { "unix": 1450137600, "natural": "December 15, 2015" } </code> </div> </body></html>');
});

// API
app.get('/:giveMe', function(req, res) {
  var response = {
    "unix":null,
    "natural":null
  };
  
  if(Number.isInteger(+req.params.giveMe)) {
    var d = new Date(+req.params.giveMe*1000);
  }
  else {
    var d = new Date(req.params.giveMe);
  }
  if(validDate(d)){
    response.unix = (d.getTime()/1000); 
    response.natural = d.toDateString();
  }
  
  res.send(JSON.stringify(response));
});

// Check if the date is valid
function validDate(d){
    if ( Object.prototype.toString.call(d) === "[object Date]") {
      if ( isNaN( d.getTime() ) ) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
}

// listen
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
