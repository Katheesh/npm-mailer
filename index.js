var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.prepare = function(Data) {

	//console.log(Data);
    //--------------------------------------------------
    // to = Reciever Email Address
    // from = Sender Email Address
    // subject = Email Main Subject
    // title = This title appear on top of body in h2 
    // body = add this parameter like plain text or html

	const theUrl = 'https://vue-mailer.herokuapp.com/api/prepare?to='+Data.to+'&from='+Data.from+'&subject='+Data.subject+'&title='+Data.title+'&body='+Data.body;

	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

exports.prepareMarkdown = function(Data) {

    //console.log(Data);
    //------------------------------------------------------
    // to = Reciever Email Address
    // from = Sender Email Address
    // subject = Email Main Subject
    // title = This title appear on top of body in h2 
    // body = add this parameter like plain text or markdown

    const theUrl = 'https://vue-mailer.herokuapp.com/api/prepare:md?to='+Data.to+'&from='+Data.from+'&subject='+Data.subject+'&title='+Data.title+'&body='+Data.body;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/* 

exports.prepare = async function(Data) {

    const axios = require('axios');
    var theUrl = 'https://vue-mailer.herokuapp.com/api/prepare?to='+Data.to+'&from='+Data.from+'&subject='+Data.subject+'&title='+Data.title+'&body='+Data.body;

    axios.get(theUrl)
      .then(function (getResponse) {
        // handle success
        console.log(getResponse.data);
        //return getResponse.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}

this.mail = function(theUrl)
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

