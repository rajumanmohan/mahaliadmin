import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'categories',
    templateUrl: './categories.html',
    styleUrls: ['./categories.css']
})
export class CategoriesComponent implements OnInit {
    name;
    category: any;
    p: number = 1;
    groceryCats = true;
    EcomCats = false;
    title;
    type;
    typeVal;
    constructor(private appService: AppService, public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }
    ngOnInit() {
        this.getGroceryCats();
        this.type = "grocery";
    }
    // get cat list
    getGroceryCats() {
        this.groceryCats = true;
        this.title = "Grocery Categories";
        this.EcomCats = false;
        this.type = "grocery";
        this.typeVal = 0;
        this.spinnerService.show();
        this.appService.getCats()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.name = ""
                    this.category = resp.json().categories;
                    this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    getEcomCats() {
        this.groceryCats = false;
        this.title = "Ecommerce Categories"
        this.EcomCats = true;
        this.type = "ecommers";
        this.typeVal = 1;
        this.spinnerService.show();
        this.appService.getEcomCat()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.name = ""
                    this.category = resp.json().categories;
                    this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    toCheck;
    getEcomCtCount() {
        this.appService.getEcomCatCount().subscribe(res => {
            if (res.json().status === 200) {
                // swal(res.json().message, "", "success");
                this.toCheck = false;
            } else if (res.json().status === 400) {
                swal(res.json().message, "", "error");
                this.toCheck = true;
            }
        })
    }
    key;
    isChecked;
    toggleVisibility(event, id) {
        this.isChecked = event.target.checked;
        if (event.target.checked === true) {
            this.key = "1";
        } else {
            this.key = "0";
        }
        var inData = {
            id: id,
            show_in_vender: this.key
        }
        this.appService.showinWebEcom(inData).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
                this.getEcomCtCount();
            }
        })
    }
    //delete category
    deleteCat(id) {
        this.spinnerService.show();
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                var data = {
                    'id': id
                }
                this.appService.deleteCat(data)
                    .subscribe(resp => {
                        this.spinnerService.hide();
                        swal("Deleted successfully", '', 'success');
                        this.getGroceryCats();
                    }),
                    error => {
                        console.log(error, "error");
                    }
            } else {
                return;
            }
        });
    }
    // add and update category
    addCat(name, id, pic, des) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'name': name,
                'id': id,
                'pic': pic,
                'des': des,
                'type': this.type,
                'typeVal': this.typeVal
            }
        }
        this.router.navigate(['/addcategory'], navigationExtras);
    }
}
