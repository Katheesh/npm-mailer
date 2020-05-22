//var Mailer = require('./src/index.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest()
exports.prepare = function(Data) {

	//console.log(Data);
   /* Data = [to
            from
            subject
            title
            body ]*/

	const theUrl = 'https://vue-mailer.herokuapp.com/api/prepare?to='+Data.to+'&from='+Data.from+'&subject='+Data.subject+'&title='+Data.title+'&body='+Data.body;

	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/* this.mail = function(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

this.mailCallback = function(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}*/

