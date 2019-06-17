import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class WatsonMLService {

  constructor(private http:HttpClient) { }

  getPrediction(arrayJSON: any) {
    let iam_token = "eyJraWQiOiIyMDE5MDIwNCIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWYwMjk2MTAyLTkwZWMtNDcwOS1iMzc0LTU5YzhjZWFjMWU3NyIsImlkIjoiaWFtLVNlcnZpY2VJZC1mMDI5NjEwMi05MGVjLTQ3MDktYjM3NC01OWM4Y2VhYzFlNzciLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1mMDI5NjEwMi05MGVjLTQ3MDktYjM3NC01OWM4Y2VhYzFlNzciLCJzdWIiOiJTZXJ2aWNlSWQtZjAyOTYxMDItOTBlYy00NzA5LWIzNzQtNTljOGNlYWMxZTc3Iiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI4M2FhODQwYzEwY2E1NWI4ZDQ3YjFiMWZjM2U4MWJhNyJ9LCJpYXQiOjE1NjA3Njg4NTksImV4cCI6MTU2MDc3MjQ1OSwiaXNzIjoiaHR0cHM6Ly9pYW0ubmcuYmx1ZW1peC5uZXQvb2lkYy90b2tlbiIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImJ4IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.Hs4xhvkxsO70tWAol01uQZmTqLTwI6fx-geb8lCFZM63_JL9I7CGKprLc31KWxzWr9oJ5hJDgxSu_LUdvo8OPWPsSjTOW3WFjjGZwOmzuQrC9iZ_ZPaWd_2U4e7_Yb-25f1E3Pw5-DtLucfh8EYgKFE2mmtP81tmiyBcClqPdA-eSKVarGtS7i290UfWGRgEt2fCpiSBcEijUMMt3g2ghsKOrLrAoU86Ar6ezepMS1Wb3AkbC-m6QDvxA70Qwx5Tq1IbM9qBUVflbEH82nkFwlQUzyf5zUN31NY4XEwPNuEFf-K26yarzMf0tsieHMznOGBeYpfJgUxwkqV0s7VDcw";
    const wmlToken = "Bearer " + iam_token;

    const mlInstanceID = "11f9ed31-a811-4f90-9b68-468d8809228c";

    const payload = '{"fields": ["GENDER", "AGE", "MARITAL_STATUS", "PROFESSION", "IS_TENT"], "values": [["M",27,"Single","Professional","TRUE"]]}';
    const scoring_url = "/api/v3/wml_instances/11f9ed31-a811-4f90-9b68-468d8809228c/deployments/a00af4d1-53db-4cde-ba62-a1cf3b7bf082/online";
    let headers = { 
      'Accept' : 'application/json',
      'Authorization': wmlToken,
      'MLInstanceID': mlInstanceID,
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
     };

    let options = { 'headers' : headers};

    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.post(scoring_url, arrayJSON, options);
  }
}
