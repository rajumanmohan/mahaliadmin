import { ExcelService } from './../../services/excel.service';
// import { ExcelService } from './../../excel.service';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProductData } from '../../services/productdata';
import { ProductService } from '../../services/productService'
// import * as XLSX from 'ts-xlsx';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    product: any = [];
    productimg: any;
    image;
    p: number = 1;
    selectedpage;
    role;
    sellerProId;
    showEcomProds = false;
    showGroceryProds = true;
    wholeType;
    // showWholeProds = false;
    constructor(
        private appService: AppService,
        public router: Router,
        public proServ: ProductService,
        private excelService: ExcelService,
        private spinnerService: Ng4LoadingSpinnerService,
        private route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe(params => {
            this.sellerProId = params.salerproductId;
        });
        this.role = sessionStorage.role;
        // if (this.role === "wholesaler") {
        //     this.getWholeProds();
        //     this.showWholeProds = true;
        // } else {
        //     this.showWholeProds = false;
        // }
    }
    // url = 'http://versatilemobitech.co.in/DHUKAN/images/'
    ngOnInit() {
        // if (this.role === "Admin") {
        this.getGroceryProds();
        // this.showWholeProds = false;
        // } else {
        //     this.getWholeProds();
        //     this.showWholeProds = true;
        // }
        this.wholeType = "grocery";
    }
    data = [];
    arrVal = [];
    imgval = [];

    snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };
    changePage(page, index) {
        this.selectedpage = index;
        // this.getGroceryProds();

    }
    aa;
    bb;
    Image;
    totalCount;
    pages;
    pagination = [];
    paginationValues: {}
    skuImg;
    SkuImgArr = [];
    //   get product
    getGroceryProds() {
        this.showGroceryProds = true;
        this.showEcomProds = false;
        if (this.role === "Admin") {
            // this.showWholeProds = false;
            this.spinnerService.show();
            this.pagination = [];
            this.appService.getGroceryProds()
                .subscribe(resp => {
                    this.spinnerService.hide();
                    this.product = resp.json().products;
                    // console.log()
                    for (var i = 0; i < this.product.length; i++) {
                        for (var j = 0; j < this.product[i].sku_row.length; j++) {
                            // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                            this.product[i].skuImg = this.product[i].sku_row[j].sku_images[0].sku_image;

                            // }
                        }
                    }

                })

            error => {
                console.log(error, "error");
            }
        } else {
            this.pagination = [];
            this.wholeType = "grocery";
            this.appService.getWholesellerProdsByGro()
                .subscribe(resp => {
                    this.spinnerService.hide();
                    this.product = resp.json().products;
                    // console.log()
                    for (var i = 0; i < this.product.length; i++) {
                        for (var j = 0; j < this.product[i].sku_row.length; j++) {
                            // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                            this.product[i].skuImg = this.product[i].sku_row[j].sku_images[0].sku_image;

                            // }
                        }
                    }

                })

            error => {
                console.log(error, "error");
            }
        }

    }
    getEcomProds() {
        this.showGroceryProds = false;
        this.showEcomProds = true;
        // this.showWholeProds = false;
        if (this.role === "Admin") {
            this.spinnerService.show();
            this.pagination = [];
            this.appService.getEcomProds()
                .subscribe(resp => {
                    this.spinnerService.hide();
                    this.product = resp.json().products;
                    // console.log()
                    for (var i = 0; i < this.product.length; i++) {
                        for (var j = 0; j < this.product[i].sku_row.length; j++) {
                            // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                            this.product[i].skuImg = this.product[i].sku_row[j].sku_images[0].sku_image;

                            // }
                        }
                    }

                })

            error => {
                console.log(error, "error");
            }
        } else {
            this.wholeType = "ecommerce";
            this.appService.getWholesellerProdsByEcom()
                .subscribe(resp => {
                    this.spinnerService.hide();
                    this.product = resp.json().products;
                    // console.log()
                    for (var i = 0; i < this.product.length; i++) {
                        for (var j = 0; j < this.product[i].sku_row.length; j++) {
                            // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                            this.product[i].skuImg = this.product[i].sku_row[j].sku_images[0].sku_image;

                            // }
                        }
                    }

                })

            error => {
                console.log(error, "error");
            }
        }
    }
    getWholeProds() {
        this.showGroceryProds = false;
        this.showEcomProds = false;
        // this.showWholeProds = true;
        this.spinnerService.show();
        let goodResponse = [];
        this.pagination = [];
        this.appService.getWholesellerProds()
            .subscribe(resp => {
                this.spinnerService.hide();
                this.product = resp.json().products;
                for (var i = 0; i < this.product.length; i++) {
                    for (var j = 0; j < this.product[i].sku_row.length; j++) {
                        // for (var k = 0; k < this.product[i].sku[j].sku_images.length; k++) {
                        this.product[i].skuImg = this.product[i].sku_row[j].sku_images[0].sku_image;

                        // }
                    }
                }
                // this.paginationValues = resp.json().data.pagination;
                // this.totalCount = resp.json().data.pagination.totalCount;
                // this.pages = Math.ceil(this.totalCount / 10);
                // console.log(this.pages);
                // for (var i = 0; i < this.pages; i++) {
                //     this.pagination.push(i);
                // }

            })

        error => {
            console.log(error, "error");
        }
    }
    // delete product
    deleteProduct(id) {
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                var data = {
                    'id': id
                }
                this.appService.deleteProduct(data)
                    .subscribe(resp => {
                        if (resp.json().message === 'Success') {
                            swal('product delete successfully', '', 'success')
                            this.getGroceryProds();
                        }
                        else {

                        }
                    },
                        error => {
                            console.log(error, "error");
                        })
            } else {
                return;
            }
        });


    }
    addprod() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                wholeId: sessionStorage.wholesalerId,
                prodId: '',
                wholeType: this.wholeType
            }
        }
        this.router.navigate(['/addprducts'], navigationExtras);
    }
    // editProd(title, catid, catName, prodId, subCat, subCatId) {
    //     let productDetails: ProductData = {
    //         categoryName: catName,
    //         categoryId: catid,
    //         subCategory: '',
    //         productName: title,
    //         productId: prodId,
    //         subCat: subCat,
    //         subCatId: subCatId,
    //         image: '',
    //         date: '',
    //     };
    //     this.proServ.products = productDetails;
    //     this.router.navigate(['/addprducts']);
    // }

    //    edit the product details
    editProd(id, page) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                prodId: id,
                page: page,
                wholeType: this.wholeType
            }
        }
        this.router.navigate(['/addprducts'], navigationExtras);
    }
    showStatus;
    Status;
    Key;
    status(btn, prodId, Appr) {
        // btn.value = Appr;
        this.showStatus = !this.showStatus;
        if (this.showStatus) {
            btn.value = Appr === "Active" ? "Inactive" : "Active"
        } else {
            btn.value = Appr
        }
        this.Status = Appr;
        this.Key = btn.value;
        var inData = {
            "product_id": prodId,
            "key": this.Key
        }
        this.appService.changeProdStatus(inData).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().result, "", "success");
            } else {
                swal(res.json().message, "", "error");
            }
        })
    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.product, 'Mahalli');
    }
}
