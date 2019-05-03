import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    ckeditorContent;
    encodeData;
    title;
    aboutusData;
    decodeData;
    aboutusId;
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getAboutUs();
    }
    About() {
        this.encodeData = btoa(this.ckeditorContent);
        var data = {
            'type': this.title,
            'description': this.encodeData,
        }
        this.appService.saveFooter(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, "", "success");
            } else {
                swal(resp.json().message, "", "error");
            }
        })
    }
    getAboutUs() {
        var inData =
        {
            "key": "About Us"
        }

        this.appService.getFooter(inData).subscribe(resp => {
            this.aboutusData = resp.json().data[0].description;
            this.decodeData = atob(this.aboutusData);
            this.ckeditorContent = this.decodeData;
            this.title = resp.json().data[0].type;
            this.aboutusId = resp.json().data[0].id;
        })
    }
    updateabout() {
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
