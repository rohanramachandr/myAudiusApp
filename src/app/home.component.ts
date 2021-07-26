import { Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class HomeComponent {

    constructor(private router: Router){}
    
    learnAboutMe(): void {
        this.router.navigate(['/about-me']);

    }
}