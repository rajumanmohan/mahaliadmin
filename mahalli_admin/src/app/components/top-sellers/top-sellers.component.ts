import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
    selector: 'app-top-sellers',
    templateUrl: './top-sellers.component.html',
    styleUrls: ['./top-sellers.component.css']
})
export class TopSellersComponent implements OnInit {

    title;
    ckeditorContent;
    encodeData;
    PrivacyData;
    decodeData;
    privacyId;
    aboutusData;
    aboutusId;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getPrivacy();
    }
    privacy() {
        this.encodeData = btoa(this.ckeditorContent);
        var data = {
            'type': this.title,
            'description': this.encodeData
        }
        this.appService.saveFooter(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, "", "success");
            } else {
                swal(resp.json().message, "", "error");
            }
        })
    }
    getPrivacy() {
        var inData =
        {
            "key": "Top Sellers"
        }

        this.appService.getFooter(inData).subscribe(resp => {
            this.aboutusData = resp.json().data[0].description;
            this.decodeData = atob(this.aboutusData);
            this.ckeditorContent = this.decodeData;
            this.title = resp.json().data[0].type;
            this.aboutusId = resp.json().data[0].id;
        })
    }
    updatePrivacy() {
        this.encodeData = btoa(this.ckeditorContent);

        var data =
        {
            "id": this.aboutusId,
            "description": this.encodeData

        }

        this.appService.updateFooter(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal('update content successfully', '', 'success');
            }
        })
    }

}
