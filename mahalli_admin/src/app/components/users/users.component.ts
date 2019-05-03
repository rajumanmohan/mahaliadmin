import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    usersList = [];
    p: number = 1;
    constructor(private appService: AppService, public router: Router, ) { }

    ngOnInit() {
        this.getUsersList();
    }
    getUsersList() {
        this.appService.getUsersList().subscribe(resp => {
            this.usersList = resp.json().data;
        })
    }
    view(Id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'userId': Id
            }
        }
        this.router.navigate(['/addusers'], navigationExtras);
    }

}
