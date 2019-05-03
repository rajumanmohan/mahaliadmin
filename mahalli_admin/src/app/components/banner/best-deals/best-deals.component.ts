import { AppService } from './../../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-best-deals',
    templateUrl: './best-deals.component.html',
    styleUrls: ['./best-deals.component.css']
})
export class BestDealsComponent implements OnInit {
    banner: any;
    bannerImg = [];
    mobileBanner;
    websiteBanner;
    image;
    bannerData = [];
    mainBannerData = [];
    type;
    bType;
    bannerPos;
    noBanners;
    constructor(private AppService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit() {
        this.getBanners();
        this.getBanners();
        this.getvendorG();
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
    mainBannerId
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
    getBanners() {
        this.spinnerService.show();
        this.AppService.getBanners(this.type).subscribe(resp => {
            this.bannerData = resp.json().result;
            if (resp.json().status === 200) {
                for (var i = 0; i < this.bannerData.length; i++) {
                    if (this.bannerData[i].banner_position === 'Brand Categories') {
                        this.mainBannerData = this.bannerData[i].banner_details;
                        this.bannerPos = this.bannerData[i].banner_position;
                        this.noBanners = false;
                        if (this.mainBannerData.length === 0) {
                            this.noBanners = true;
                        }

                    }
                }

            }
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
                banType: banner_type,
                bType: this.bType
            }
        }
        this.router.navigate(['/addbanner'], navigationExtras);
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

    // getDealsBanners() {
    //     this.AppService.getBannerUrl().subscribe(resp => {
    //         this.banner = resp.json().result.TOP1;
    //     })
    // }
    // deleteBestDealBanner(i) {
    //     this.AppService.deleteBanner(i).subscribe(resp => {
    //         swal('banner deleted successfully', '', 'success');
    //         this.getBanners();
    //     })
    // }
    // editBestDealBanner(id) {
    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             dealbannerId: id
    //         }
    //     }
    //     this.router.navigate(['/addbanner'], navigationExtras);
    // }

}
