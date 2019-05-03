import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-vendor-products',
    templateUrl: './vendor-products.component.html',
    styleUrls: ['./vendor-products.component.css']
})
export class VendorProductsComponent implements OnInit {
    prodId;
    vendorProds;
    venName;
    constructor(private appService: AppService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.prodId = params.vendorId;
            this.venName = params.VenName;
        });
    }

    ngOnInit() {
        this.getVendorProducts();
    }
    // showStatus;
    // Status;
    // key;
    // status(btn, venProdId) {
    //     this.key = btn.value;
    //     var inData = {
    //         "product_status": this.key
    //     }
    //     this.showStatus = !this.showStatus;
    //     if (this.showStatus) {
    //         btn.value = "Disapprove"
    //     } else {
    //         btn.value = "Approve"
    //     }
    //     this.appService.acceptProduct(venProdId, inData).subscribe(res => {
    //         if (res.json().status === "200") {
    //             swal(res.json().message, "", "success");
    //         }
    //     })
    // }
    statusChange(status, venId) {
        var inData = {
            "product_status": status
        }
        this.appService.acceptProduct(venId, inData).subscribe(res => {
            if (res.json().status === "200") {
                swal(res.json().message, "", "success");
                this.getVendorProducts();
            }
        })
    }
    getVendorProducts() {
        this.appService.getVendorProds(this.prodId).subscribe(res => {
            this.vendorProds = res.json().vendor_products;
            // for (var i = 0; i < this.vendorProds.length; i++) {
            //     // this.skuArr = 
            // }
        })
    }

}
