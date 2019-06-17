const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", token);
	oReq.setRequestHeader("MLInstanceID", mlInstanceID);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}

var apikey = "fNeK8HtaP4TRimx0pYKvcu6YUVVOegLbrazpnpJtarCs";
var iam_token = "eyJraWQiOiIyMDE5MDIwNCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWYwMjk2MTAyLTkwZWMtNDcwOS1iMzc0LTU5YzhjZWFjMWU3NyIsImlkIjoiaWFtLVNlcnZpY2VJZC1mMDI5NjEwMi05MGVjLTQ3MDktYjM3NC01OWM4Y2VhYzFlNzciLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1mMDI5NjEwMi05MGVjLTQ3MDktYjM3NC01OWM4Y2VhYzFlNzciLCJzdWIiOiJTZXJ2aWNlSWQtZjAyOTYxMDItOTBlYy00NzA5LWIzNzQtNTljOGNlYWMxZTc3Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI4M2FhODQwYzEwY2E1NWI4ZDQ3YjFiMWZjM2U4MWJhNyJ9LCJpYXQiOjE1NjA3NTQzODYsImV4cCI6MTU2MDc1Nzk4NiwiaXNzIjoiaHR0cHM6Ly9pYW0ubmcuYmx1ZW1peC5uZXQvb2lkYy90b2tlbiIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImJ4IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.aRuIu2lXb6kovwpa3V762RZ75nw0vn-y-DYKeBM7vZIiwX2TGdZNZgrM5Ro6i6Dlov23PlpbQf4LN6pkMzjDoG_SSFlwtyb_rFNdx3G2AbN7uYvlFjpnileQL8JBty_anIEinSIkLvPfcdIBpn6hiAxhXkRoPrqTQ8K9SqGkxomrtdkGD6ueDRH3DswXhpiT8qdrzQxtgEFzy5280oT24N9jLBdMrB3lpcW0lLfQxJ7DBuXx2sCc3Fp-hcwILtD25qsaRr4zAUqaz4CRBqqU2Jj9wFGdmH6t1hFvEFNTsbeWb3ugZ1ajROdBncaizJ7KRI5gNhqAOyO0r0mQJlSMtQ";
const wmlToken = "Bearer " + iam_token;

// NOTE: retrieve ml_instance_id based on provided documentation
const ml_instance_id = "11f9ed31-a811-4f90-9b68-468d8809228c";
const mlInstanceId = ml_instance_id;

// NOTE: manually define and pass the array(s) of values to be scored in the next line
const payload = '{"fields": ["GENDER", "AGE", "MARITAL_STATUS", "PROFESSION", "IS_TENT"], "values": [["M",27,"Single","Professional","TRUE"]]}';
const scoring_url = "https://us-south.ml.cloud.ibm.com/v3/wml_instances/11f9ed31-a811-4f90-9b68-468d8809228c/deployments/a00af4d1-53db-4cde-ba62-a1cf3b7bf082/online";

apiPost(scoring_url, wmlToken, mlInstanceId, payload, function (resp) {
	let parsedPostResponse;
	try {
		parsedPostResponse = JSON.parse(this.responseText);
	} catch (ex) {
		// TODO: handle parsing exception
	}
	console.log("Scoring response");
	console.log(JSON.stringify(parsedPostResponse, null, 2));
}, function (error) {
	console.log(error);
});