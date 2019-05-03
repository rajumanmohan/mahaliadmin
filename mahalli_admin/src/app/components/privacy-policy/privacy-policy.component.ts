import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
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
            "key": "Privacy Policy"
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
