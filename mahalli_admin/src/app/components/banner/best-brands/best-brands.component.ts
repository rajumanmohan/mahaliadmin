import { AppService } from './../../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-best-brands',
    templateUrl: './best-brands.component.html',
    styleUrls: ['./best-brands.component.css']
})
export class BestBrandsComponent implements OnInit {
    banner: any;
    bannerImg = [];
    mobileBanner;
    websiteBanner;
    image;
    mainBannerId;
    bannerData = [];
    mainBannerData = [];
    type;
    noData;
    bType;
    bannerPos;
    constructor(private AppService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
        this.getBanners();
        this.getvendorG();
    }


    getBanners() {
        this.spinnerService.show();
        this.AppService.getBanners(this.type).subscribe(resp => {
            this.bannerData = resp.json().result;
            if (resp.json().status === 200) {
                if (this.bannerData != undefined) {
                    for (var i = 0; i < this.bannerData.length; i++) {
                        this.noData = false;
                        if (this.bannerData[i].banner_position === 'Feature brands') {
                            this.mainBannerData = this.bannerData[i].banner_details;
                            console.log(this.mainBannerData);
                            this.bannerPos = this.bannerData[i].banner_position
                        }
                    }
                } else {
                    this.noData = true;
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
            // this.getBanners();
        })
    }
    editBanner(id, ImgId, webImg, mobImg, banner_type) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                bannerId: id,
                imgId: ImgId,
                webImg: webImg,
                mobImg: mobImg,
                banPos: this.bannerPos,
                banType: banner_type
            }
        }
        this.router.navigate(['/addbanner'], navigationExtras);
    }
    addBanner(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                bannerId: id,
                bType: this.bType
            }
        }
        this.router.navigate(['/addbanner'], navigationExtras);
    }
    getvendorG() {
        this.type = "0";
        this.getBanners();
        this.bType = 'vendorG';

    }
    getvendorE() {
        this.type = "1";
        this.getBanners();
        this.bType = 'vendorE';

    }
    getUserG() {
        this.type = "2";
        this.getBanners();
        this.bType = 'userG';
    }
    getUserE() {
        this.type = "3";
        this.getBanners();
        this.bType = 'userE';
    }

}
