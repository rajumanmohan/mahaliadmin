import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-vendors',
    templateUrl: './vendors.component.html',
    styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
    vendors;
    p: number = 1;
    constructor(private appService: AppService, public router: Router) { }

    ngOnInit() {
        this.getVendors();
    }
    getVendors() {
        this.appService.getVendorsList().subscribe(resp => {
            this.vendors = resp.json().data;
        })
    }
    // getVendorsbyId(id) {
    //     this.appService.getVendorsbyId(id).subscribe(resp => {

    //     })
    // }
    editVendor(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                vendorId: id
            }
        }
        this.router.navigate(['/addvendors'], navigationExtras);
    }
    deleteVendor(id) {
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                // this.appService.deleteVendorbyId(id).subscribe(resp => {
                //     this.getVendors();
                // })
            } else {
                return;
            }
        });

    }
    view(Id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'vendorId': Id
            }
        }
        this.router.navigate(['/addvendors'], navigationExtras);
    }
    vendorProd(Id, fName, lName) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'vendorId': Id,
                'VenName': fName + "" + lName
            }
        }
        this.router.navigate(['/vendorProds'], navigationExtras);
    }
}
