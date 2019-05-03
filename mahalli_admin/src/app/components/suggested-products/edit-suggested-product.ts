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
    templateUrl: './edit-suggested-product.html',
    styleUrls: ['./suggested-products.component.css']
})
export class editSuggestedComponent implements OnInit {
    product: any = [];
    productimg: any;
    image;
    p: number = 1;
    selectedpage;
    role;
    sellerProId;
    suggetedData = [];
    prodId;
    prodName;
    constructor(
        private appService: AppService,
        public router: Router,
        public proServ: ProductService,
        private excelService: ExcelService,
        private spinnerService: Ng4LoadingSpinnerService,
        private route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe(params => {
            this.prodId = params.id;
        });
    }
    // url = 'http://versatilemobitech.co.in/DHUKAN/images/'
    ngOnInit() {
        this.getSuggestedProds();

    }
    getSuggestedProds() {
        this.appService.getsuggestedProds().subscribe(res => {
            this.suggetedData = res.json().data;
            for (var i = 0; i < this.suggetedData.length; i++) {
                if (parseInt(this.prodId) === this.suggetedData[i].id) {
                    this.prodName = this.suggetedData[i].product_name;
                }
            }

        })
    }
    updateProduct() {
        var inData = {
            product_name: this.prodName
        }
        this.appService.changeStatusOfSuggested(inData, this.prodId).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
            } else {
                swal(res.json().message, "", "error");
            }
        })
    }

}
