import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'add-wholesellers',
    templateUrl: './add.wholeseller.html',
    styleUrls: ['./wholesellers.component.css']
})
export class AddWholesellersComponent implements OnInit {
    first_name;
    last_name;
    mobile;
    email;
    password;
    addWholeseller = true;
    wholeSellers = [];
    sellerId;
    selerProId;
    commission_to_admin;
    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.sellerId = params.sellerId
        });
        if (this.sellerId === undefined) {
            this.addWholeseller = true;
        } else {
            this.addWholeseller = false;
            this.getWholeSeller();
        }
    }

    ngOnInit() {

    }
    bussiness_name;
    bussiness_houseno;
    bussiness_address;
    bussiness_country;
    bussiness_area;
    bussiness_city;
    bussiness_pincode;
    addWholeSeller() {
        let data = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "password": this.password,
            "mobile_number": this.mobile,
            "role": "wholesaler",
            "bussiness_name": this.bussiness_name,
            "bussiness_houseno": this.bussiness_houseno,
            "bussiness_address": this.bussiness_address,
            "bussiness_country": this.bussiness_country,
            "bussiness_area": this.bussiness_area,
            "bussiness_city": this.bussiness_city,
            "bussiness_pincode": this.bussiness_pincode,
            "commission_to_admin": this.commission_to_admin,
            "image_one": this.urls[0].split(',')[1],
            "image_two": this.urls[1].split(',')[1],
            "image_three": this.urls[2].split(',')[1],
            "image_four": this.urls[3].split(',')[1]

        }

        this.appService.addWholeseller(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, '', 'success');
                this.router.navigate(['/wholesellers']);
            } else if (resp.json().status === 400) {
                swal(resp.json().message, '', 'error');
            }
        })
    }
    getWholeSeller() {
        this.appService.getWholeSeller().subscribe(resp => {
            this.wholeSellers = resp.json().data;
            for (var i = 0; i < this.wholeSellers.length; i++) {
                if (this.sellerId == this.wholeSellers[i].id) {
                    this.first_name = this.wholeSellers[i].first_name;
                    this.last_name = this.wholeSellers[i].last_name;
                    this.mobile = this.wholeSellers[i].mobile_number;
                    this.email = this.wholeSellers[i].email;
                    this.password = this.wholeSellers[i].password;
                    this.bussiness_name = this.wholeSellers[i].bussiness_name;
                    this.bussiness_houseno = this.wholeSellers[i].bussiness_houseno;
                    this.bussiness_address = this.wholeSellers[i].bussiness_address;
                    this.bussiness_country = this.wholeSellers[i].bussiness_country;
                    this.bussiness_area = this.wholeSellers[i].bussiness_area;
                    this.bussiness_city = this.wholeSellers[i].bussiness_city;
                    this.bussiness_pincode = this.wholeSellers[i].bussiness_pincode;
                    this.commission_to_admin = this.wholeSellers[i].commission_to_admin

                    return
                }
            }
        })
    }
    updateWholeSeller() {
        var data = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "id": this.sellerId,
            "email": this.email,
            "mobile_number": this.mobile
        }
        this.appService.updateWholeSeller(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, '', 'success');
                this.router.navigate(['/wholesellers']);
            } else if (resp.json().status === 400) {
                swal(resp.json().message, '', 'error');
            }
        })
    }
    newSkuData = [];
    skuImage;
    action;
    selectedImage;
    img;
    strImage;
    skusData;
    skuImge;
    imgSku;
    urls = [];
    images;
    ImgArr = [];
    skid;
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    console.log(e.target.result)
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
        }
    }

}
