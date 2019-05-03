import { AppService } from './../../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
// import { Router, NavigationExtras } from '@angular/router';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'add-users',
    templateUrl: './add.brand.html',
    styleUrls: ['./best-brands.component.css']
})
export class AddBrandComponent implements OnInit {
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
    skusData = [];
    productData = [];
    subCategoryName = [];
    catName = [];
    catId = [];
    subCatId = [];
    prodId = [];
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
                this.mainId = params.mainId
        })
        if (this.bannerId === '') {
            // this.removeImg = false;
            this.addbanners = true;

        } else {
            // this.Image = true;
            // this.removeImg = true;
            this.addbanners = false;
            this.editbannerById();
            // this.addbanners = this.action;

        }
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
            catNames: ''
        });
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
            for (var i = 0; i < this.skusData.length; i++) {
                if (i === index) {
                    // this.skusData[i].image = myReader.result;
                    this.skusData[i].mobile_banner = this.strImage;
                    this.skusData[i].mobile_bannerimage = this.image;
                }
            }
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
            for (var i = 0; i < this.skusData.length; i++) {
                if (i === index) {
                    // this.skusData[i].image = myReader.result;
                    this.skusData[i].website_banner = this.strImage1;
                    this.skusData[i].website_bannerimage = this.image1;
                }
            }
        }
        myReader.readAsDataURL(file);
    }

    onChange(type, index) {
        this.type = type;
        for (var i = 0; i < this.skusData.length; i++) {
            if (i === index) {
                if (this.type === 'Categories') {
                    this.skusData[i].category = true;
                    this.skusData[i].subcategory = false;
                    this.skusData[i].product = false;
                    this.skusData[i].brand = false;
                    this.skusData[i].skus = false;
                } else if (this.type === 'Subcategories') {
                    this.skusData[i].subcategory = true;
                    this.skusData[i].category = false;
                    this.skusData[i].product = false;
                    this.skusData[i].brand = false;
                    this.skusData[i].skus = false;
                } else if (this.type === 'Product') {
                    this.skusData[i].subcategory = false;
                    this.skusData[i].category = false;
                    this.skusData[i].product = true;
                    this.skusData[i].skus = false;
                    this.skusData[i].brand = false;
                } else if (this.type === 'sku') {
                    this.skusData[i].subcategory = false;
                    this.skusData[i].category = false;
                    this.skusData[i].product = false;
                    this.skusData[i].brand = false;
                    this.skusData[i].skus = true;
                } else if (this.type === 'Brand') {
                    this.skusData[i].subcategory = false;
                    this.skusData[i].category = false;
                    this.skusData[i].product = false;
                    this.skusData[i].skus = false;
                    this.skusData[i].brand = true;
                }
                return;
            }
        }


    }
    getCat() {
        this.AppService.getCat()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.categorydata = resp.json().result;
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

                    for (var i = 0; i < this.skusData.length; i++) {
                        // this.skusData[i].image = myReader.result;
                        if (i === index) {
                            this.skusData[i].target = this.catId.join(',');
                            this.skusData[i].catNames = this.catName.join(',');
                        }
                    }
                    return;
                }
            }
        } else if (action === 'subcat') {
            for (var i = 0; i < this.subCategoryName.length; i++) {
                if (this.subCategoryName[i].id === parseInt(id)) {
                    this.catName.push(this.subCategoryName[i].sub_category_name);
                    this.subCatId.push(this.subCategoryName[i].id);

                    for (var i = 0; i < this.skusData.length; i++) {
                        // this.skusData[i].image = myReader.result;
                        if (i === index) {
                            this.skusData[i].target = this.subCatId.join(',');
                            this.skusData[i].catNames = this.catName.join(',');
                        }
                    }
                    return;
                }
            }
        }
        else if (action === 'prod') {
            for (var i = 0; i < this.productData.length; i++) {
                if (this.productData[i].product_id === parseInt(id)) {
                    this.catName.push(this.productData[i].product_name);
                    this.prodId.push(this.productData[i].product_id);

                    for (var i = 0; i < this.skusData.length; i++) {
                        // this.skusData[i].image = myReader.result;
                        if (i === index) {
                            this.skusData[i].target = this.prodId.join(',');
                            this.skusData[i].catNames = this.catName.join(',');
                        }
                    }
                    return;
                }
            }
        }

    }


    deleteSku(index) {
        this.skusData.splice(index, 1);
    }
    addbanner() {
        this.spinnerService.show();
        var data = {
            'title': this.title,
            'banners': this.skusData
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
    editbannerById() {
        var data = {
            'id': this.bannerId
        }
        // this.AppService.editBannerbyId(data).subscribe(resp => {
        //     this.skusData = resp.json().result;
        //     this.imageId = resp.json().result[0].image_id;
        //     this.image = true;
        //     for (var i = 0; i < this.skusData.length; i++) {
        //         if (this.skusData[i].type === 'Categories') {
        //             this.skusData[i].category = true;
        //             this.catId.push(this.skusData[i].target);


        //         } else if (this.skusData[i].type === 'Subcategories') {
        //             this.skusData[i].subcategory = true;
        //             this.subCatId.push(this.skusData[i].target);
        //         } else if (this.skusData[i].type === 'Product') {
        //             this.skusData[i].product = true;
        //             this.prodId.push(this.skusData[i].target);
        //         }
        //     }

        // })
    }
    updateBanner() {
        this.spinnerService.show();
        var data = {
            'id': this.imageId,
            'name': this.skusData[0].name,
            'website_bannerimage': this.skusData[0].mobile_banner,
            'mobile_bannerimage': this.skusData[0].website_banner,
            'type': this.skusData[0].type


        }
        // this.AppService.updateBannerbyId(data).subscribe(resp => {
        //     if (resp.json().status === 200) {
        //         this.spinnerService.hide();
        //         swal('banner added successfully', '', 'success');
        //         this.router.navigate(['/banner']);
        //     }
        //     else if (resp.json().status === 400) {
        //         swal(resp.json().message, '', 'error');
        //     }
        //     else {

        //     }
        // })
    }
}
