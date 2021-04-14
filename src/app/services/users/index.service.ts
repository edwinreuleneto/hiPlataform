import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {}

  GetUsers(){
    return this.http.get(`https://raw.githubusercontent.com/HiPlatform/prova-frontend/master/data.json`).pipe( (users) => users);
  }
}
