import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './order.details.html',
    styleUrls: ['./orders.component.css']
})
export class orderDetails implements OnInit {
    delivryBoy;
    page;
    orderId;
    showVendorOrds: boolean;
    showUserOrds: boolean;
    userOrds = [];
    ordData = [];
    orderDet;
    count;
    orderAdd = [];
    role;
    ordStatus;
    type;
    wholeId;
    p: number = 1;
    constructor(private appServie: AppService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.orderId = params.orderId
            this.type = params.type;
            this.wholeId = params.wholeId
        })
        this.role = sessionStorage.role;
    }
    orders;
    ngOnInit() {
        if (this.role == 'wholesaler' || this.type === "whole") {
            this.ordDetailsWhole();
        } else if (this.type === 'vendor') {
            this.getUserOrdDetails();
        } else {
            this.ordDetails();
        }
    }
    ordDetails() {
        this.appServie.orderById(this.orderId).subscribe(resp => {
            this.ordData = resp.json().Order.products;
            for (var i = 0; i < this.ordData.length; i++) {
                // this.productsData = this.ordData.products;
                // this.ordData[i].size = this.ordData[i].sku_details[0].size;
                // this.ordData[i].selling_price = this.ordData[i].sku_details[0].selling_price;
            }
            this.orderDet = resp.json().Order.details[0];
            this.orderAdd = resp.json().Order.delivery_address[0];
            this.count = resp.json().Order.total_selling_price;
        })
    }
    ordDetailsWhole() {
        this.appServie.orderDetailsByOrdId(this.orderId, this.wholeId).subscribe(resp => {
            this.ordData = resp.json().Order.products;
            for (var i = 0; i < this.ordData.length; i++) {
                // this.productsData = this.ordData.products;
                // this.ordData[i].size = this.ordData[i].sku_details[0].size;
                // this.ordData[i].selling_price = this.ordData[i].sku_details[0].selling_price;
            }
            this.orderDet = resp.json().Order.details[0];
            this.orderAdd = resp.json().Order.delivery_address[0];
            this.count = resp.json().Order.total_selling_price;
        })
    }
    statusChange(ordStauts, cartId) {
        this.ordStatus = ordStauts;
        var inData = {
            "order_status": this.ordStatus
        }
        this.appServie.orderChangeByProdId(cartId, inData).subscribe(res => {
            swal(res.json().message, "", "success");
            this.ordDetailsWhole();
        })
    }
    getUserOrdDetails() {
        this.appServie.orderDetByVenId(this.orderId, this.wholeId).subscribe(resp => {
            this.ordData = resp.json().Order.products;
            for (var i = 0; i < this.ordData.length; i++) {
                // this.productsData = this.ordData.products;
                // this.ordData[i].size = this.ordData[i].sku_details[0].size;
                // this.ordData[i].selling_price = this.ordData[i].sku_details[0].selling_price;
            }
            this.orderDet = resp.json().Order.details[0];
            this.orderAdd = resp.json().Order.delivery_address[0];
            this.count = resp.json().Order.total_selling_price;

        })
    }
    // getAllVendorOrders() {
    //     this.appServie.getAllVendorOrds().subscribe(res => {
    //         this.orders = res.json().Orders;
    //     }, error => {

    //     })
    // }
    // getDelivery() {
    //     // this.appServie.getDelivery().subscribe(resp => {
    //     //     this.delivryBoy = resp.json().data;
    //     // })
    // }
    // getUserOrds() {
    //     this.appServie.getUserOrders().subscribe(res => {
    //         this.userOrds = res.json().order;
    //     })
    // }
}
