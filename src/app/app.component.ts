import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAudiusApp';
  public isMenuCollapsed = true;
  home: boolean = true;
  aboutMe: boolean = false;
  contactMe: boolean = false;

  onNavigate(page: Event) {
    console.log("target",page.target);
   
  }

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
