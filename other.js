/*

Is the data a valid data?

*/
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
};

/*

Get the URL?

*/

var http = require('http');
const url = require('url');

function parseT(date){
    return {
        "hour":date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
}

function unixT(date){
    return {
        "unixtime":date.getTime()
    };
}

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        return res.end('send me a GET\n');
    
    res.writeHead(200, { 'content-type': 'application/json' });
    
    var data = url.parse(req.url, true);
    var date = new Date(data.query.iso);
    var JSONres;
    
    if(data.pathname === "/api/parsetime")
        JSONres = parseT(date);
    
    if(data.pathname === "/api/unixtime")
        JSONres = unixT(date);
    
    res.end(JSON.stringify(JSONres));
});  

server.listen(Number(process.argv[2]));