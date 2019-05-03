import { LoginComponent } from './../login/login.component';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'add-sub-cat',
    templateUrl: './add.sub.cat.html',
    styleUrls: ['./add.cat.css']

})
export class AddSubCatComponent implements OnInit {
    category: any;
    categoryId;
    subCat;
    id;
    subCa;
    mainCat;
    subCate: boolean;
    action;
    caId;
    mainCatId;
    textarea;
    img;
    actionType;
    title;
    constructor(private appService: AppService, private route: ActivatedRoute, public router: Router, private spinnerService: Ng4LoadingSpinnerService) {
        this.route.queryParams.subscribe(params => {
            this.id = params.id,
                this.subCa = params.subCat,
                this.mainCat = params.mainCat,
                this.mainCatId = params.mainCatId,
                this.action = params.action,
                this.img = params.img,
                this.textarea = params.des,
                this.actionType = params.actionType
        });
        if (this.action === 'addsub') {
            this.subCate = true;
        } else {
            this.subCate = false;
        }
    }
    changeCat(id) {
        this.mainCat = id;
        // for (var i = 0; i < this.category.length; i++) {
        //     if (id === this.category[i].category_name) {
        //         this.caId = this.category[i].id
        //     }
        // }

    }
    ngOnInit() {
        if (this.actionType === 'ecom') {
            this.getEcomCat();
            this.title = "Add Ecommerce Subcategory";
        } else {
            this.getCat();
            this.title = "Add Grocery Subcategory";

        }
    }

    getCat() {
        this.spinnerService.show();
        this.appService.getGroceryCat()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    // this.name = ""
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
    getEcomCat() {
        this.spinnerService.show();
        this.appService.getEcomCat()
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    // this.name = ""
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
    insertSubCat() {
        this.spinnerService.show();
        var data = {
            'sub_category_name': this.subCa,
            'category_id': this.mainCat,
            'image': this.strImage,
            'description': this.textarea,
            // "wholesaler_id": sessionStorage.wholesalerId
        }
        this.appService.insertSubCat(data).subscribe(resp => {
            this.spinnerService.hide();
            swal("add subCategory successfully", '', 'success');
            this.router.navigate(['/subcategory']);
        })
    }
    updateSubCat() {
        this.spinnerService.show();
        var data = {
            'id': this.id,
            'sub_category_name': this.subCa,
            'category_id': this.mainCatId,
            'image': this.strImage,
            'description': this.textarea
        }
        this.appService.updateSubCat(data).subscribe(resp => {
            this.spinnerService.hide();
            swal("update subCategory successfully", '', 'success');
            this.router.navigate(['/subcategory']);
        })
    }
    image;
    strImage: any;
    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image = myReader.result;
            this.strImage = this.image.split(',')[1];
        }
        myReader.readAsDataURL(file);
    }
}