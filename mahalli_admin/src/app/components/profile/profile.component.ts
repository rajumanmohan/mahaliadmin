import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile;
    first_name;
    role;
    constructor() {
        this.role = sessionStorage.role;
    }

    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.profile = JSON.parse(sessionStorage.getItem("profile"));
        console.log(this.profile);

    }
}
