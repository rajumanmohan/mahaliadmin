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
    templateUrl: './suggested-products.component.html',
    styleUrls: ['./suggested-products.component.css']
})
export class SuggestedProductsComponent implements OnInit {
    product: any = [];
    productimg: any;
    image;
    p: number = 1;
    selectedpage;
    role;
    sellerProId;
    suggetedData = [];
    showStatus;
    Status;
    Key;
    constructor(
        private appService: AppService,
        public router: Router,
        public proServ: ProductService,
        private excelService: ExcelService,
        private spinnerService: Ng4LoadingSpinnerService,
        private route: ActivatedRoute
    ) {

    }
    // url = 'http://versatilemobitech.co.in/DHUKAN/images/'
    ngOnInit() {
        this.getSuggestedProds();

    }
    getSuggestedProds() {
        this.appService.getsuggestedProds().subscribe(res => {
            this.suggetedData = res.json().data;
        })
    }
    status(btn, prodId, Appr) {
        // btn.value = Appr;
        this.showStatus = !this.showStatus;
        if (this.showStatus) {
            btn.value = Appr === "active" ? "inactive" : "active"
        } else {
            btn.value = Appr
        }
        this.Status = Appr;
        this.Key = btn.value;
        var inData = {
            "status": this.Key
        }
        this.appService.changeStatusOfSuggested(inData, prodId).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
            } else {
                swal(res.json().message, "", "error");
            }
        })
    }
    editProd(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                id: id
            }
        }
        this.router.navigate(['/editSuggested'], navigationExtras)
    }

}
