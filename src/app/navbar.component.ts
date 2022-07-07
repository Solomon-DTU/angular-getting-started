import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
pageTitle: string = 'APM Product Manager'
  constructor() { }

  ngOnInit(): void {
  }

}
