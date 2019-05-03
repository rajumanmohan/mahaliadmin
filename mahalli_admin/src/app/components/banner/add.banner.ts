import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'add-users',
    templateUrl: './add.banner.html',
    styleUrls: ['./banner.component.css']
})
export class AddBannerComponent implements OnInit {
    mainId;
    bannerId;
    categorydata;
    category = false;
    subcategory = false;
    product = false;
    skus = false;
    brand = false;
    positions = [];
    type: any;
    selectedImage: any;
    selectedImage1: any;
    addbanners: boolean;
    title: any;
    mobile_banner;
    website_banner;
    website_bannerimage;
    skusData = [];
    productData = [];
    subCategoryName = [];
    catName = [];
    catId = [];
    subCatId = [];
    prodId = [];
    banType;
    banTitle;
    name;
    catImg;
    target;
    banner_position;
    catNames;
    mobile_bannerimage;
    webImg;
    mobImg;
    BannerType;
    BannerType1;
    bType;
    BannersData = [];
    // BannersData = ["Main Banners", "Branded banners", "Featured banners", "Popular Brands", "Dummy Banner", "Brand Categories", "UserGrocery Dummy Banner"]
    // skuValues = {
    //     name: '',
    //     // type: '',
    //     // mobile_banner: this.mobile_banner,
    //     // website_banner: this.website_banner,

    // }
    // bannerId= 
    constructor(private AppService: AppService, private route: ActivatedRoute, public router: Router, private spinnerService: Ng4LoadingSpinnerService) {
        this.route.queryParams.subscribe(params => {
            this.bannerId = params.bannerId,
                this.mainId = params.imgId
            this.bType = params.bType
            if (this.bannerId === '') {
                // this.removeImg = false;
                this.addbanners = true;
                this.banTitle = "Add Banner";
            } else {
                // this.Image = true;
                // this.removeImg = true;
                this.addbanners = false;
                this.banTitle = "Edit Banner";
                this.getBannersById();
                this.webImg = params.webImg
                this.mobImg = params.mobImg;
                this.BannerType1 = params.banPos;
                this.banner_type = params.banner_type;
                // this.addbanners = this.action;

            }
            if (this.bType === 'vendorG') {
                this.BannersData = ["Main Banners"]
            } else if (this.bType === 'vendorE') {
                this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]
            } else if (this.bType === 'userG') {
                this.BannersData = ["Main Banners", "Brand Categories", "UserGrocery Dummy Banner"]
            } else {
                this.BannersData = ["Main Banners", "Feature brands", "Dummy Banner"]

            }
        })
    }

    ngOnInit() {
        this.getCat();
        this.getProduct();
        this.getSubCategory();
        this.getBannerPostion();

    }
    getBannerPostion() {
        // this.AppService.getBannerPostion().subscribe(resp => {
        //     this.positions = resp.json().result;
        // })
    }
    bannerPosition(value) {
        this.title = value;
    }
    banner_type;
    sku() {
        this.catName = [];
        this.skusData.push({
            name: '',
            type: '',
            // skuImage: this.skuImg,
            mobile_banner: '',
            mobile_bannerimage: '',
            website_banner: '',
            website_bannerimage: '',
            target: '',
            catNames: '',
            banner_type: ''

        });
    }
    bannerType(type) {
        this.banner_type = type;
    }
    image;
    strImage;
    changeListener($event, index): void {
        this.readThis($event.target, index);
    }

    readThis(inputValue: any, index): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image = myReader.result;
            this.strImage = this.image.split(',')[1];
            // for (var i = 0; i < this.skusData.length; i++) {
            // if (i === index) {
            // this.skusData[i].image = myReader.result;
            this.mobile_banner = this.strImage;
            this.mobile_bannerimage = this.image;
            //     }
            // }
        }
        myReader.readAsDataURL(file);
    }
    image1;
    strImage1;
    changeListener1($event, index): void {
        this.readThis1($event.target, index);
    }

    readThis1(inputValue: any, index): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image1 = myReader.result;
            this.strImage1 = this.image1.split(',')[1];
            // for (var i = 0; i < this.skusData.length; i++) {
            //     if (i === index) {
            // this.skusData[i].image = myReader.result;
            this.website_banner = this.strImage1;
            this.website_bannerimage = this.image1;
            //     }
            // }
        }
        myReader.readAsDataURL(file);
    }

    onChange(type, index) {
        this.type = type;
        // for (var i = 0; i < this.skusData.length; i++) {
        // if (i === index) {
        if (this.type === 'Categories') {
            this.category = true;
            this.subcategory = false;
            this.product = false;
            this.brand = false;
            this.skus = false;
        } else if (this.type === 'Subcategories') {
            this.subcategory = true;
            this.category = false;
            this.product = false;
            this.brand = false;
            this.skus = false;
        } else if (this.type === 'Product') {
            this.subcategory = false;
            this.category = false;
            this.product = true;
            this.skus = false;
            this.brand = false;
        } else if (this.type === 'sku') {
            this.subcategory = false;
            this.category = false;
            this.product = false;
            this.brand = false;
            this.skus = true;
        } else if (this.type === 'Brand') {
            this.subcategory = false;
            this.category = false;
            this.product = false;
            this.skus = false;
            this.brand = true;
        }
        return;
        // }
        // }


    }
    getCat() {
        this.AppService.getCat()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.categorydata = resp.json().categories;
                }
                else {

                }
            },
                error => {
                    console.log(error, "error");
                })
    }
    getSubCategory() {
        this.AppService.getSubCategery().subscribe(resp => {
            this.subCategoryName = resp.json().result;
            // for (var i = 0; i < this.subCategoryName.length; i++) {
            //     this.subCategoryId = this.subCategoryName[i].sub_cat_id;
            // }

        },
            error => {
                console.log(error, "error");
            })
    }
    getProduct() {
        this.AppService.getProduct()
            .subscribe(resp => {
                this.productData = resp.json().data.results;
            })

        error => {
            console.log(error, "error");
        }
    }


    changeCat(id, index, action) {
        if (action === 'cat') {
            for (var i = 0; i < this.categorydata.length; i++) {
                if (this.categorydata[i].id === parseInt(id)) {
                    this.catName.push(this.categorydata[i].category_name);
                    this.catId.push(this.categorydata[i].id);

                    // for (var i = 0; i < this.skusData.length; i++) {
                    // this.image = myReader.result;
                    // if (i === index) {
                    this.target = this.catId.join(',');
                    this.catNames = this.catName.join(',');
                    //     }
                    // }
                    return;
                }
            }
        } else if (action === 'subcat') {
            for (var i = 0; i < this.subCategoryName.length; i++) {
                if (this.subCategoryName[i].id === parseInt(id)) {
                    this.catName.push(this.subCategoryName[i].sub_category_name);
                    this.subCatId.push(this.subCategoryName[i].id);

                    // for (var i = 0; i < this.skusData.length; i++) {
                    //     // this.skusData[i].image = myReader.result;
                    //     if (i === index) {
                    this.target = this.subCatId.join(',');
                    this.catNames = this.catName.join(',');
                    //     }
                    // }
                    return;
                }
            }
        }
        // else if (action === 'prod') {
        //     for (var i = 0; i < this.productData.length; i++) {
        //         if (this.productData[i].product_id === parseInt(id)) {
        //             this.catName.push(this.productData[i].product_name);
        //             this.prodId.push(this.productData[i].product_id);

        //             for (var i = 0; i < this.skusData.length; i++) {
        //                 // this.skusData[i].image = myReader.result;
        //                 if (i === index) {
        //                     this.skusData[i].target = this.prodId.join(',');
        //                     this.skusData[i].catNames = this.catName.join(',');
        //                 }
        //             }
        //             return;
        //         }
        //     }
        // }

    }


    deleteSku(index) {
        this.skusData.splice(index, 1);
    }
    addbanner() {
        this.skusData.push({
            name: this.name,
            type: this.type,
            // skuImage: this.skuImg,
            mobile_banner: this.mobile_banner,
            mobile_bannerimage: this.mobile_bannerimage,
            website_banner: this.website_banner,
            website_bannerimage: this.website_bannerimage,
            target: this.target,
            catNames: this.catNames,
            banner_type: this.banner_type

        });
        // this.spinnerService.show();
        var data = {
            'title': this.title,
            'banners': this.skusData
            // "type": this.banType
        }
        this.AppService.addbanners(data).subscribe(resp => {
            if (resp.json().status === 200) {
                this.spinnerService.hide();
                swal('banner added successfully', '', 'success');
                this.router.navigate(['/banner']);
            }
            else if (resp.json().status === 400) {
                swal(resp.json().message, '', 'error');
            }
        })
    }
    bannerDetails;
    skuValues;
    imageId;
    // name;
    // mobile_banner = [];
    // website_banner = [];
    bannerData = [];
    mainData = [];
    mainBannerData = [];
    getBannersById() {
        this.AppService.getbannerById(this.bannerId, this.mainId).subscribe(res => {
            this.bannerData = res.json().result;
            console.log(this.bannerData);
            this.name = this.bannerData[0].name;
            this.catImg = this.bannerData[0].mobile_banner;
            this.catImg = this.bannerData[0].banner_position;
            this.BannerType = this.bannerData[0].banner_position;
        }, err => {

        })
    }
    // editbannerById() {
    //     this.AppService.getBanners().subscribe(res => {
    //         this.bannerData = res.json().result;
    //         for (var i = 0; i < this.bannerData.length; i++) {
    //             if (this.bannerData[i].banner_position === 'Main Banners') {
    //                 this.mainBannerData = this.bannerData[i].banner_details;
    //                 console.log(this.mainBannerData);
    //                 debugger;
    //             }
    //         }
    //     }, err => {

    //     })


    // }
    updateBanner() {
        this.spinnerService.show();
        var data = {
            'id': this.mainId,
            'name': this.name,
            'website_banner': this.mobile_banner,
            'mobile_banner': this.website_banner,
            'banner_type': this.banner_type,
            'target': this.target,
            // 'catNames': this.catNames
        }
        this.AppService.updateBanner(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal("Updated successfully", '', 'success');
                this.router.navigate(['/banner']);
            }
            else {
                swal(resp.json().message, '', 'error');

            }

        })
    }
}
