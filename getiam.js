const request = require('request');
const btoa = require("btoa");
var apikey = "iKKq2gYluoEZftclqS4lMPh2QfYITmBdADFAXfBZfpDJ";
var IBM_Cloud_IAM_uid = "bx";
var IBM_Cloud_IAM_pwd = "bx";
var iam_token;

var options = { url     : "https://iam.bluemix.net/oidc/token",
                headers : { "Content-Type"  : "application/x-www-form-urlencoded",
                            "Authorization" : "Basic " + btoa( IBM_Cloud_IAM_uid + ":" + IBM_Cloud_IAM_pwd ) },
                body    : "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey" };

request.post( options, function( error, response, body )
{
    var iam_token = JSON.parse( body )["access_token"];
    console.log(iam_token);
} );
