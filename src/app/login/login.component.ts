import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService]
 })


export class LoginComponent implements OnInit {

  token: string;

  constructor(public router: Router, public http: Http, public auth: AuthServiceService) {
  	  this.token = localStorage.getItem('token');
  }
  ngOnInit() {

  }
  login(event,username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
	  this.auth.login(username, password)
      .subscribe(
        (token: any) => {
        	this.router.navigate(['heroes']);
        },
        () => { 
        	console.log("Error");
        }
      );
	}s
}