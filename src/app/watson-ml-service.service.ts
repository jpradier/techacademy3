import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class WatsonMLService {
  iam_token = "eyJraWQiOiIyMDE5MDIwNCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLTkyMDA0YTc4LTFiMGMtNGRiMi1iYmRiLWExYzMwZDRiNTRlOCIsImlkIjoiaWFtLVNlcnZpY2VJZC05MjAwNGE3OC0xYjBjLTRkYjItYmJkYi1hMWMzMGQ0YjU0ZTgiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC05MjAwNGE3OC0xYjBjLTRkYjItYmJkYi1hMWMzMGQ0YjU0ZTgiLCJzdWIiOiJTZXJ2aWNlSWQtOTIwMDRhNzgtMWIwYy00ZGIyLWJiZGItYTFjMzBkNGI1NGU4Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiJiZWJkNzk5ZmQ1N2U2NzJmOTlmNzA5ZDgxZWZiZjMzZiJ9LCJpYXQiOjE1NjE2MzY1OTgsImV4cCI6MTU2MTY0MDE5OCwiaXNzIjoiaHR0cHM6Ly9pYW0ubmcuYmx1ZW1peC5uZXQvb2lkYy90b2tlbiIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImJ4IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.Q7YH2jRQLPVWSweqc2K1SvYGR9GUqfb8mXRgf0pA3UYUHMOgWQ4-dCAwZU21Tq9sz0t5pkoRB8tgCkve0pOAlwY_FrKU1PI3ZisCxhrW7AujH7iQDRAHtHtBirzY79XLTrC8M6j_PzgVpMLNNm4echf7qUDIgydu9G8ILGTzr6dQ7kmyTc1JitNFNvbSKzwKz0RrxMF_lVq9KQCyfaY5bTIDPRxFFtQFmaj4vL7oFpVUpgreAi_-_KkxI7gBXI9CsOG7FAmlu2Bl9KHghJOSCbQgtTb2xgo0B2u_QWc94FHvx6EXLjRVPhAZ30lAt_JMo7nBedJSktMMumKIOa3xoA";

  constructor(private http:HttpClient) { }

  getPrediction(arrayJSON: any) {
    const wmlToken = "Bearer " + this.iam_token;

    const mlInstanceID = "11f9ed31-a811-4f90-9b68-468d8809228c";

    //const payload = '{"fields": ["ACCOUNT", "USERNAME", "auth|securityinfo", "auth|securitynotice", "crond", "sshd", "su"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}';
    const scoring_url = "/api/v3/wml_instances/00580d4e-ec29-46b1-9c6c-11a53f2f8062/deployments/55a12832-6f85-4255-90de-a0661cbfad0f/onlineonline";
    let headers = { 
      'Accept' : 'application/json',
      'Authorization': wmlToken,
      'MLInstanceID': mlInstanceID,
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
     };

    let options = { 'headers' : headers};

    return this.http.post(scoring_url, arrayJSON, options);
  }
}
