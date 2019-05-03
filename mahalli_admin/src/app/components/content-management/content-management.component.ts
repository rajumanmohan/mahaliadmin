import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
    selector: 'app-content-management',
    templateUrl: './content-management.component.html',
    styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent implements OnInit {
    title;
    ckeditorContent;
    encodeData;
    termsData;
    decodeData;
    termsId;
    encodeData1;
    aboutusData;
    aboutusId;
    ngAfterViewChecked() {
        // let editor = this.ckEditor.instance;
        // editor.config.height = '400';
        // editor.config.autoParagraph = false;
        // editor.config.toolbarGroups = [
        // { name: 'document', groups: ['mode', 'document', 'doctools'] },
        // { name: 'clipboard', groups: ['clipboard', 'undo'] },
        // { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        // { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        // { name: 'insert', groups: ['insert'] }
        // ]
        // editor.config.removeButtons = 'Source,Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio';
    }
    constructor(private appService: AppService) {

    }

    ngOnInit() {
        this.getPrivacy();
    }
    Terms() {
        this.encodeData = btoa(this.ckeditorContent);
        var data = {
            "description": this.encodeData,
            "type": this.title
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
            "key": "Terms & conditions"
        }

        this.appService.getFooter(inData).subscribe(resp => {
            this.aboutusData = resp.json().data[0].description;
            this.decodeData = atob(this.aboutusData);
            this.ckeditorContent = this.decodeData;
            this.title = resp.json().data[0].type;
            this.aboutusId = resp.json().data[0].id;
        })
    }
    updateTerms() {
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
