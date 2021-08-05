import { ThrowStmt } from "@angular/compiler";
import { Component, Output, ViewEncapsulation, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

    @Output() navigate: EventEmitter<string> = new EventEmitter<string>();

    constructor(private router: Router){}
    
    learnAboutMe(): void {
        console.log("learn about me")
        this.navigate.emit("about-me");
        this.router.navigate(['/about-me']);
    }
}