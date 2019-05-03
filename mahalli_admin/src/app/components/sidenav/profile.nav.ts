import { AppService } from '../../services/mahali/mahali-data.service';
// import { urls } from './../../services/constants/constants';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
    selector: 'profile-nav',
    templateUrl: './profile.nav.html',
    styleUrls: ['./profile.nav.css']


})
export class ProfileNavComponent implements OnInit {
    category: any
    banner: boolean = false;
    test;
    sideBarData;
    showCat: boolean = false;
    showSubCat: boolean = false;
    showCoupon: boolean = false;
    showproducts: boolean = false;
    banners: boolean = false;
    userList: boolean = false;
    wholeList: boolean = false;
    vendorList: boolean = false;
    vendorOrds: boolean = false;
    userOrds: boolean = false;
    content: boolean = false;
    staff: boolean = false;
    notifications: boolean = false;
    suggestedProds: boolean = false;
    vendorsList: boolean = false;
    comission: boolean = false;
    // wholeList: boolean = false;


    constructor(private route: ActivatedRoute, private appService: AppService,
        private http: HttpClient, public router: Router) {
        this.pageNav = this.route.snapshot.data[0]['page'];
        this.sideBarData = JSON.parse(sessionStorage.getItem("profile"));
        if (this.sideBarData.role === "staff") {
            this.showCat = JSON.parse(this.sideBarData.Categories);
            this.showSubCat = JSON.parse(this.sideBarData.SubCategory);
            this.showCoupon = JSON.parse(this.sideBarData.Coupon);
            this.showproducts = JSON.parse(this.sideBarData.Prodcts);
            this.banners = JSON.parse(this.sideBarData.Prodcts);
            this.userList = JSON.parse(JSON.parse(this.sideBarData.UserList));
            this.wholeList = JSON.parse(this.sideBarData.WholeList);
            this.vendorList = JSON.parse(this.sideBarData.VendorList);
            this.vendorOrds = JSON.parse(this.sideBarData.vendorOrders);
            this.userOrds = JSON.parse(this.sideBarData.userOrders);
            this.content = JSON.parse(this.sideBarData.Content);
            this.staff = JSON.parse(this.sideBarData.staff);
            this.notifications = JSON.parse(this.sideBarData.notifications);
            // this.vendorsList = JSON.parse(this.sideBarData.notifications);
            this.suggestedProds = false;
        } else if (this.sideBarData.role === "Admin") {
            // this.showproducts = false;
            this.suggestedProds = this.showproducts = this.showCoupon = this.banners = this.vendorsList = this.userList = this.wholeList = this.showCat = this.showSubCat = this.vendorList = this.vendorOrds = this.userOrds = this.content = this.staff = this.notifications = this.comission = true;
        } else {
            this.showCoupon = this.showproducts = this.userList = this.vendorList = this.vendorOrds = this.notifications = true;
            this.wholeList = this.showCat = this.showSubCat = this.banners = this.userList = this.userOrds = this.vendorsList = this.content = this.vendorList = this.staff = this.suggestedProds = false;
        }
    }
    pageNav;
    ngOnInit() {
        // this.getCat();
    }
    collapse() {
        this.banner = !this.banner;
    }
    logOut() {
        sessionStorage.clear();
        this.router.navigate(["/"]);
        sessionStorage.clear();
    }

}