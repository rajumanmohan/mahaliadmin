import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    delivryBoy;
    page;
    showVendorOrds: boolean;
    showUserOrds: boolean;
    userOrds = [];
    role;
    type;
    wholeId;
    noOrd;
    p: number = 1;
    constructor(private appServie: AppService, private route: ActivatedRoute, private router: Router) {
        this.page = this.route.snapshot.data[0]['page'];
        this.role = sessionStorage.role;
        this.route.queryParams.subscribe(params => {
            this.type = params.type;
            this.wholeId = params.id;
        })
        if (this.page === 'vendrorders') {
            this.showVendorOrds = true;
            this.showUserOrds = false;
            if (this.role == 'wholesaler') {
                this.getVendorOrdersByWhole();
            } else {
                if (this.type === "whole") {
                    this.getVendorOrdersByWhole();
                } else {
                    this.getAllVendorOrders();
                }
            }
        } else {
            this.showUserOrds = true;
            this.showVendorOrds = false;
            this.type === 'vendor' ? this.getUserOrdsByVenId() : this.getUserOrds();
        }
        this.ordStatus = "Placed";
    }
    orders;
    ordStatus;
    ngOnInit() {
        // this.getDelivery();
    }
    orderDetails(orderId) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                orderId: orderId,
                type: this.type,
                wholeId: this.wholeId
            }
        }
        this.router.navigate(['/orderDetails'], navigationExtras)
    }
    statusChange(ordStauts, ordId) {
        this.ordStatus = ordStauts;
        var inData = {
            "order_status": this.ordStatus || "Placed"
        }
        this.appServie.updateVendorOrd(ordId, inData).subscribe(res => {
            swal(res.json().message, "", "success");
            this.getUserOrds();
            this.getAllVendorOrders();
        })
    }
    getAllVendorOrders() {
        this.appServie.getAllVendorOrds().subscribe(res => {
            this.orders = res.json().Orders;
        }, error => {

        })
    }
    getVendorOrdersByWhole() {
        this.appServie.getVendorOrdInWhole(this.wholeId).subscribe(res => {
            this.orders = res.json().Orders;
            this.noOrd = false;
            if (this.userOrds.length === 0) {
                this.noOrd = true;
            }
        }, error => {

        })
    }
    getDelivery() {
        // this.appServie.getDelivery().subscribe(resp => {
        //     this.delivryBoy = resp.json().data;
        // })
    }
    getUserOrds() {
        this.appServie.getUserOrders().subscribe(res => {
            this.userOrds = res.json().order;
        })
    }
    getUserOrdsByVenId() {
        this.appServie.getUserOrdByVenId(this.wholeId).subscribe(res => {
            this.userOrds = res.json().Orders;
            this.noOrd = false;
            if (this.userOrds.length === 0) {
                this.noOrd = true;
            }
        })
    }
}
