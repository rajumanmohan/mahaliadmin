import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
@Component({
    selector: 'add-vendors',
    templateUrl: './add.vendor.html',
    styleUrls: ['./vendors.component.css']
})
export class AddVendorsComponent implements OnInit {
    strImage: any;
    first_name;
    last_name;
    mobile_number;
    email;
    vendorId;
    vendors: any;
    commission_to_admin;
    constructor(private appService: AppService, private route: ActivatedRoute, public router: Router) {
        this.route.queryParams.subscribe(params => {
            this.vendorId = params.vendorId
        });
    }

    ngOnInit() {
        this.getVendors();
    }
    image;

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image = myReader.result;
            this.strImage = this.image.split(',')[1];
        }
        myReader.readAsDataURL(file);
    }
    getVendors() {
        this.appService.getVendorsList().subscribe(resp => {
            this.vendors = resp.json().data;
            for (var i = 0; i < this.vendors.length; i++) {
                if (this.vendorId == this.vendors[i].id) {
                    this.first_name = this.vendors[i].first_name;
                    this.last_name = this.vendors[i].last_name;
                    this.mobile_number = this.vendors[i].mobile_number;
                    this.email = this.vendors[i].email;
                    this.commission_to_admin = this.vendors[i].commission_to_admin;
                    return
                }
            }
        })
    }
    updateVendorbyId() {
        var data = {
            "id": this.vendorId,
            'first_name': this.first_name,
            'last_name': this.last_name,
            'mobile_number': this.mobile_number,
            'email': this.email,
            'commission_to_admin': this.commission_to_admin
        }
        this.appService.updateVendorbyId(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal('update vendor successfully', '', 'success');
                this.router.navigate(['/vendors']);
            }
        })
    }
}
