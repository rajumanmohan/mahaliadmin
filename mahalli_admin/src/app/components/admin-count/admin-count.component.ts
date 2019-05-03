import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
    selector: 'app-admin-count',
    templateUrl: './admin-count.component.html',
    styleUrls: ['./admin-count.component.css']
})
export class AdminCountComponent implements OnInit {
    Count = [];
    userCount;
    role;
    constructor(private appService: AppService) {
        this.role = sessionStorage.role;
    }

    ngOnInit() {
        this.getAdminCount();
    }
    getAdminCount() {
        this.appService.getAdminCount().subscribe(res => {
            this.Count = res.json().data;
            this.userCount = res.json().data.users;
        })
    }
}
