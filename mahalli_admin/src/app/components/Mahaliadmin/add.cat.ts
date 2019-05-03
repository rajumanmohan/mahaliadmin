import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'add-cat',
    templateUrl: './add.cat.html',
    styleUrls: ['./add.cat.css']
})
export class AddCatComponent implements OnInit {
    data: any;
    input;
    strImage: any;
    textarea;
    categoryType;
    type;
    typeVal;
    image;
    title;
    constructor(private appService: AppService, private route: ActivatedRoute, public router: Router, private spinnerService: Ng4LoadingSpinnerService) {
        this.route.queryParams.subscribe(params => {
            this.catname = params.name
            this.id = params.id
            this.pic = params.pic
            this.des = params.des
            this.type = params.type,
                this.typeVal = params.typeVal
        });

        if (this.catname === '') {
            this.addcat = true;
        } else {
            this.addcat = false;
            this.input = this.catname;
            this.textarea = this.des;
            this.catImg = this.pic;
        }
    }

    catname;
    id;
    addcat: boolean;
    pic;
    des;
    catImg;
    showCat;
    formdata = {
        categoryType: ''
    }
    ngOnInit() {
        // this.addCat();
        if (this.type === "grocery") {
            this.title = "Add Grocery Category";
        } else {
            this.title = "Add Ecommerce Category";

        }
    }

    //add category
    addCat(name) {
        this.spinnerService.show();
        // if (this.strImage = this.textarea === '') {
        //     swal("Required filelds are missing", "", "warning");
        // }
        var data = {
            'name': name,
            'image': this.strImage,
            'description': this.textarea,
            'type': this.typeVal,
            "show_in_user": this.showCat
            // "wholesaler_id": sessionStorage.wholesalerId
        }
        this.appService.addCat(data)
            .subscribe(resp => {
                if (resp.json().message === 'Success') {
                    this.data = resp.json().result;
                    this.spinnerService.hide();
                    swal('Category added', '', 'success');
                    this.router.navigate(['/category']);

                }
                else if (resp.json().status === 400) {
                    swal(resp.json().err_field, '', 'error');
                }
            },
                error => {
                    console.log(error, "error");
                })
    }

    //update category
    updateCat(name) {
        this.spinnerService.show();
        var data = {
            'name': name,
            'grocery_id': this.id,
            'image': this.strImage,
            'description': this.textarea,
            "show_in_user": this.showCat
        }
        this.appService.updateCat(data)
            .subscribe(resp => {
                this.spinnerService.hide();
                swal('update category successfully', '', 'success');
                this.router.navigate(['/category']);
            }),
            error => {
                console.log(error, "error");
            }
    }
    // categotyType = [
    //     { type: 0, catType: 'grocery' },
    //     { type: 1, catType: 'ecommers' }
    // ]
    // image;
    // changeCat(type) {
    //     this.type = type;
    // }
    changeListener($event): void {
        this.readThis($event.target);
    }
    toggleVisibility(e) {
        this.showCat = e.target.checked;
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