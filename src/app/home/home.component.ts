import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fistName: {
    name: 'Chó 31'
  };
  secondName: {
    name: 'Chó 2'
  };
  thirdName: {
    name: 'Chó 3'
  };

    constructor() {};

  ngOnInit(): void {

  }


}
