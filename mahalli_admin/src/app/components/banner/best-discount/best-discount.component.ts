import { AppService } from './../../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-best-discount',
    templateUrl: './best-discount.component.html',
    styleUrls: ['./best-discount.component.css']
})
export class BestDiscountComponent implements OnInit {
    banner: any;
    bannerImg = [];
    mobileBanner;
    websiteBanner;
    image;
    bannerData = [];
    mainBannerData = [];
    type;
    noBanners;
    constructor(private AppService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
        this.getBanners();
    }
    addBanner(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                bannerId: id
            }
        }
        this.router.navigate(['/addbestdiscount'], navigationExtras);
    }
    mainBannerId;
    getvendorG() {
        this.type = "0";
        this.getBanners();
    }
    getvendorE() {
        this.type = "1";
        this.getBanners();
    }
    getUserG() {
        this.type = "2";
        this.getBanners();
    }
    getUserE() {
        this.type = "3";
        this.getBanners();
    }
    getBanners() {
        this.spinnerService.show();
        this.AppService.getBanners(this.type).subscribe(resp => {
            this.bannerData = resp.json().result;
            if (resp.json().status === 200) {
                for (var i = 0; i < this.bannerData.length; i++) {
                    if (this.bannerData[i].banner_position === 'Best Discounts') {
                        this.mainBannerData = this.bannerData[i].banner_details;
                        this.noBanners = false;
                        if (this.mainBannerData.length === 0) {
                            this.noBanners = true;
                        }

                    }
                }

            }
        })
    }
    deleteBanner(id) {
        this.spinnerService.show();
        var data = {
            'id': id
        }
        this.AppService.deletebanners(data).subscribe(resp => {
            this.spinnerService.hide();
            swal('banner deleted successfully', '', 'success');
            this.getBanners();
        })
    }
    editBanner(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                bannerId: id,
                mainId: this.mainBannerId
            }
        }
        this.router.navigate(['/addbestdiscount'], navigationExtras);
    }

}
