import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
@Component({
    selector: 'app-staff',
    templateUrl: './get_staff.html',
    styleUrls: ['./staff.component.css']
})
export class getStaffComponent implements OnInit {
    staffData = [];
    constructor(private appService: AppService) {

    }
    ngOnInit() {
        this.getStaff();
    }
    getStaff() {
        this.appService.getStaff().subscribe(res => {
            this.staffData = res.json().data;
        })
    }

}
