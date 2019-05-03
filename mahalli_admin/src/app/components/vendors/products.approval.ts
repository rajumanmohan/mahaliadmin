import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-vendors',
    templateUrl: './products.approval.html',
    styleUrls: ['./vendors.component.css']
})
export class productsForapproval implements OnInit {
    vendors;
    p: number = 1;
    appProds = [];
    venName;
    noData: boolean = false;
    constructor(private appService: AppService, public router: Router) { }

    ngOnInit() {
        this.getApprovalProds();
    }
    getApprovalProds() {
        this.appService.prodsForAppr().subscribe(res => {
            this.appProds = res.json().vendor_products;
            if (res.json().message === "No records Found") {
                this.noData = true;
            }
            this.noData = false;
        })
    }
    showStatus;
    Status;
    key;
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
    //             this.getApprovalProds();
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
                this.getApprovalProds();
            }
        })
    }


}
