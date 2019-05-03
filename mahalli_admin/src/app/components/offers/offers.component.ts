import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
    coupons: any;
    couponsId: any;
    p: number = 1;
    constructor(private AppService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
        this.getCoupons();
    }
    getCoupons() {
        // this.spinnerService.show();
        this.AppService.getVouchers().subscribe(resp => {
            this.spinnerService.hide();
            this.coupons = resp.json().data;
            console.log(this.coupons);

        })
    }
    editOffer(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                offerId: id
            }
        }
        this.router.navigate(['/addOffers'], navigationExtras);
    }
    deleteVoucher(id) {
        // this.spinnerService.show();
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                this.AppService.deleteVoucher(id).subscribe(response => {
                    // this.spinnerService.hide();
                    swal("Deleted successfully", '', 'success');
                    this.getCoupons();
                }, error => {

                })
            } else {
                return;
            }
        });
    }
}
