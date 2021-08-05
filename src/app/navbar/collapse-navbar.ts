import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({selector: 'ngbd-collapse-navbar', templateUrl: './collapse-navbar.html', styleUrls: ['./collapse-navbar.css']})
export class NgbdCollapseNavbar {
 
  public isMenuCollapsed = true;


  constructor(public router: Router ) {

  }

}