import {Component} from '@angular/core';

@Component({selector: 'ngbd-collapse-navbar', templateUrl: './collapse-navbar.html', styleUrls: ['./collapse-navbar.css']})
export class NgbdCollapseNavbar {
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
  home: boolean = true;
  aboutMe: boolean = false;
  contactMe: boolean = false;

  onClick(tab: string) {
    if(tab.localeCompare("home") == 0){
      this.home = true;
      this.aboutMe= false;
      this.contactMe = false;
    }
    else if (tab.localeCompare("about-me") == 0){
      this.home = false;
      this.aboutMe= true;
      this.contactMe = false;
    }
    else {
      this.home = false;
      this.aboutMe= false;
      this.contactMe = true;
    }
    this.isMenuCollapsed = true
  }
}