import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  constructor(private http:HttpClient) { }

  cos(x:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml'});
    const body = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="maths.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:cos>
            <mat:x>${x}</mat:x>
        </mat:cos>
    </x:Body>
    </x:Envelope>`;
    return this.http.post(`http://localhost:8000/maths/?wsdl`, body, {headers: headers, responseType: 'text'});
  }

  sin(x:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml'});
    const body = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="maths.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:sin>
            <mat:x>${x}</mat:x>
        </mat:sin>
    </x:Body>
    </x:Envelope>`;
    return this.http.post(`http://localhost:8000/maths/?wsdl`, body, {headers: headers, responseType: 'text'});
  }

  max(x:number,y:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml'});
    const body = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="maths.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:max>
            <mat:x>${x}</mat:x>
            <mat:y>${y}</mat:y>
        </mat:max>
    </x:Body>
    </x:Envelope>`;
    return this.http.post(`http://localhost:8000/maths/?wsdl`, body, {headers: headers, responseType: 'text'});
  }

  min(x:number,y:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml'});
    const body = `<x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:mat="maths.isg.tn">
    <x:Header/>
    <x:Body>
        <mat:min>
            <mat:x>${x}</mat:x>
            <mat:y>${y}</mat:y>
        </mat:min>
    </x:Body>
    </x:Envelope>`;
    return this.http.post(`http://localhost:8000/maths/?wsdl`, body, {headers: headers, responseType: 'text'});
  }

}
