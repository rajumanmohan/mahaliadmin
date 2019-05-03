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
    selector: 'app-wholesalerproducts',
    templateUrl: './wholesalerproducts.component.html',
    styleUrls: ['./wholesalerproducts.component.css']
})
export class WholesalerproductsComponent implements OnInit {
    sellerProId;
    product = [];
    productimg: any;
    image;
    noRecords = false;
    p: number = 1;
    selectedpage;
    role;
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
    }
    // url = 'http://versatilemobitech.co.in/DHUKAN/images/'
    ngOnInit() {
        this.getProduct();

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
        this.getProduct();

    }
    aa;
    bb;
    Image;
    totalCount;
    pages;
    pagination = [];
    paginationValues: {}
    //   get product
    getProduct() {
        this.spinnerService.show();
        let goodResponse = [];
        this.pagination = [];
        this.appService.getProductbyId(this.sellerProId)
            .subscribe(resp => {
                this.spinnerService.hide();
                if (resp.json().status === 200) {
                    this.product = resp.json().products;
                } else if (resp.json().status === 400) {
                    this.noRecords = true;
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
                            this.getProduct();
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
    showStatus;
    Status;
    key;
    status(btn, prodId, Appr) {
        this.Status = btn.value;
        this.key = btn.value === "Active" ? "Inactive" : "Active"
        var inData = {
            "approval": this.key
        }
        this.showStatus = !this.showStatus;
        if (this.showStatus) {
            btn.value = Appr === "Active" ? "Inactive" : "Active"
        } else {
            btn.value = Appr
        }
        this.appService.updateWholesellerProds(inData, prodId).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
                // this.getProduct();
            } else {
                swal(res.json().result, "", "error");
            }
        })
    }
    addprod() {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                wholeId: this.sellerProId,
                prodId: ""
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
                page: page
            }
        }
        this.router.navigate(['/addprducts'], navigationExtras);
    }



    // exportAsXLSX(): void {
    //     this.excelService.exportAsExcelFile(this.product, 'sample');
    // }
    // url = '';
    // excel;
    // public fileEvent($event, page) {
    //     const fileSelected: File = $event.target.files[0];
    //     this.appService.uploadFile(fileSelected)
    //         .subscribe((response) => {
    //             swal('Import excel successfully', '', 'success');
    //             this.getProduct(page);
    //             return response;

    //         },
    //             (error) => {
    //                 console.log('set any error actions...');
    //             });
    // }

}
