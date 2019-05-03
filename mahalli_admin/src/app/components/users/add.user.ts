import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'add-users',
    templateUrl: './add.user.html',
    styleUrls: ['./users.component.css']
})
export class AddUsersComponent implements OnInit {
    userId;
    usersList;
    first_name;
    last_name;
    mobile_number;
    email;
    constructor(private route: ActivatedRoute, public router: Router, private appService: AppService) {
        this.route.queryParams.subscribe(params => {
            this.userId = params.userId
        });
    }

    ngOnInit() {
        this.getUsersList();
    }
    getUsersList() {
        this.appService.getUsersList().subscribe(resp => {
            this.usersList = resp.json().data;
            for (var i = 0; i < this.usersList.length; i++) {
                if (this.userId == this.usersList[i].reg_id) {
                    this.first_name = this.usersList[i].first_name;
                    this.last_name = this.usersList[i].last_name;
                    this.mobile_number = this.usersList[i].mobile_number;
                    this.email = this.usersList[i].email;
                    return
                }
            }
        })
    }

}
