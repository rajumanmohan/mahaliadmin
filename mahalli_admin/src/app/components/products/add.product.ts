import { LoginComponent } from './../login/login.component';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productService'
import { IMyDpOptions } from 'mydatepicker';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'underscore';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import swal from 'sweetalert';
import { googlemaps } from 'googlemaps';

@Component({
    selector: 'add-products',
    templateUrl: './add.product.html',
    styleUrls: ['./products.component.css']
})
export class AddProductsComponent implements OnInit {
    form: FormGroup;
    text: string;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    public model: any = { date: { year: 2019, month: 10, day: 9 } };
    type;
    product_name;
    formdata = {
        categoryName: '',
        subcategoryName: '',
        proName: '',
        Manufacture: '',
        country: ''
    }

    addProd: boolean;
    removeImg: boolean = false;
    Image: boolean;
    amount: boolean;
    percentage: boolean;
    data: any;
    category;
    categoryId;
    updateSkuImg = [];
    productId;
    action;
    subCategory: any;
    caId;
    cateGoryId;
    strImage;
    subCatName;
    subCatId;
    subCateId;
    productDetails = [];
    img;
    urls = [];
    imagenum;
    images = [];
    Productimages = [];
    selectedImage;
    imgSku;
    Description;
    specification;
    terms;
    faq;
    mrp;
    skuImg = '';
    skuImage;
    vegImage
    skusData = [];
    locationData = [];
    country;
    public addrKeys: string[];
    public addr: object;
    position2;
    positionValue2;
    pin_code;
    area;
    // skuValues = {
    //     size: '',
    //     quantity: '',
    //     mrp: '',
    //     offer: '',
    //     sellingPrice: '',
    //     stock: '',
    //     skuImage: this.skuImg,
    //     quality_image: this.vegImage,
    //     image: this.type,
    //     country: '',
    //     state: '',
    //     city: '',
    //     area: '',
    //     Description: '',
    //     specification: '',
    //     terms: '',
    //     faq: '',
    //     answer: '',
    //     gg: ''
    // }
    offer;

    subcatId;
    size;
    quantity: string;
    brand;
    brandid;
    actualPrice;
    sellingPrice;
    list: any[];
    disAmount;
    disPercentage;
    answer;
    isChecked;
    countryData = [];
    countrys = [];
    statesData = [];
    citysData = [];
    citys = [];
    areasData = [];
    areas = [];
    selcountry;
    states = [];
    selstate;
    selcity;
    selarea;
    updatedSkus = [];
    skuImagesData = [];
    skuImge;
    image1 = false;
    pageValue;
    wholeId;
    wholeType;
    title;
    role;
    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        public proserv: ProductService,
        public router: Router,
        private fb: FormBuilder,
        private spinnerService: Ng4LoadingSpinnerService,
        private zone: NgZone
    ) {
        this.route.queryParams.subscribe(params => {
            this.action = params.prodId;
            this.pageValue = params.page;
            this.wholeId = params.wholeId;
            this.wholeType = params.wholeType
        });
        this.role = sessionStorage.role;

        if (this.action === '') {
            this.removeImg = false;
            this.addProd = true;


        } else {
            this.Image = true;
            // this.removeImg = true;
            this.addProd = false;
            this.productId = this.action;

        }
        if (this.wholeType === "grocery") {
            this.title = "Add Grocery Products";
        } else {
            this.title = "Add Ecommerce Products";

        }
    }
    product: any;
    productSku = []
    productdetails = [];
    skuimages = [];
    cat_id;
    subCat_id;
    brand_id;
    is_active;
    upProduct = [];
    optionsModel: number[];
    proName;
    prodtype;
    getProduct() {
        this.image1 = true;
        this.skuimages = [];
        let goodResponse = [];
        this.skusData = [];
        this.spinnerService.show();
        this.appService.getProdById(this.productId)
            .subscribe(resp => {
                this.spinnerService.hide();
                this.product = resp.json().products;
                if (this.product != undefined) {
                    for (var i = 0; i < this.product.length; i++) {
                        // if (parseInt(this.action) === this.product[i].product_id) {
                        this.formdata.categoryName = this.product[i].main_cat_name;
                        this.formdata.subcategoryName = this.product[i].sub_cat_name;
                        this.formdata.proName = this.product[i].product_name;
                        this.formdata.Manufacture = this.product[i].brand;
                        this.cat_id = this.product[i].category_id;
                        this.subCat_id = this.product[i].subcategory_id;
                        this.prodtype = this.product[i].type;
                        this.is_active = this.product[i].is_active;
                        this.brand_id = this.product[i].brand_id;
                        this.skusData = this.product[i].sku_row;
                        this.upProduct = this.product[i].sku_row;
                        this.formdata.country = this.product[i].country;

                        // for (var m = 0; m < this.product[i].warehouse.length; m++) {
                        //     this.optionsModel.push(this.product[i].warehouse[m].warehouse_id);
                        // }
                        for (var j = 0; j < this.skusData.length; j++) {
                            this.skusData[j].offer = this.skusData[j].offer_price;
                            this.skusData[j].sellingPrice = this.skusData[j].selling_price;
                            this.skusData[j].quantity = this.skusData[j].min_quantity;
                            this.skusData[j].image1 = this.skusData[j].quality_image;
                            this.skusData[j].termscnd = this.skusData[j].terms_conditions;
                            this.skusData[j].answer = this.skusData[j].answer;
                            this.skusData[j].question = this.skusData[j].question;
                            // this.skusData[j].state = this.skusData[j].State;
                            // this.skusData[j].city = this.skusData[j].City;
                            // this.skusData[j].area = this.skusData[j].Area;
                            // this.skusData[j].country = this.skusData[j].Country;
                            this.type = this.skusData[j].image;
                            this.skusData[j].sku_images = this.skusData[j].sku_images;
                            // this.locationData = JSON.parse(sessionStorage.getItem('locationData'));
                            // this.getStates(this.skusData[j].Country);
                            // this.getCitys(this.skusData[j].State);
                            // this.getArea(this.skusData[j].City);
                        }
                        return;
                        // }
                    }
                }

            })
        error => {
            console.log(error, "error");
        }

        console.log(this.optionsModel)
    }

    optionsChecked = [];
    radio: any[];

    myOptions: IMultiSelectOption[];
    // cities: IMultiSelectOption[];
    ngOnInit() {

        this.list = [{
            id: '1',
            title: 'Normal Delivery'
        },
        {
            id: '2',
            title: 'Express Delivery'
        }],
            this.radio = [{
                id: '1',
                name: 'Other'
            },
            {
                id: '2',
                name: 'Veg'
            },
            {
                id: '3',
                name: 'Non-Veg'
            }]
        if (this.action !== '') {
            // this.editProImages();


        }
        this.type = 'other'
        this.getCat();
        // this.getSubCategory();
        this.getLocation();
        this.getProduct();
        this.getwarehouse();
    }
    warehouse;
    warehouseData = [];
    dataWare = [];
    // cities;
    getwarehouse() {
        // this.appService.getwarehouse().subscribe(resp => {
        //     this.warehouse = resp.json().result;
        // })
    }
    onChange(event) {
        console.log(this.optionsModel);
        console.log(this.dataWare);
    }
    // radioType(event) {
    //     this.type = event;

    // }
    subCategoryName;
    subArr = [];
    showProds = [];
    prodName = [];
    prodsName = [];
    changeCat(id) {
        this.showProds = [];
        this.categoryId = id;
        this.prodsName = [];
        for (var i = 0; i < this.category.length; i++) {
            if (JSON.parse(this.categoryId) === this.category[i].id) {
                this.subArr = this.category[i].subcategory;

            }
        }
        if (this.role === 'Admin') {
            this.appService.getsugProdForCat(this.categoryId).subscribe(res => {
                this.prodName = res.json().data;
                // for (var i = 0; i < this.prodName.length; i++) {
                //     this.showProds = (this.prodName[i].product_name);
                //     console.log(this.showProds);
                // }
            })
        }

    }
    changeSubCat(name) {
        if (this.subCategoryName != undefined) {
            for (var i = 0; i < this.subCategoryName.length; i++) {
                if (name === this.subCategoryName[i].sub_category_name) {
                    this.subCatId = this.subCategoryName[i].id;
                    this.subCat_id = this.subCategoryName[i].id;
                }
                // }
            }
        }

    }

    changeSub(Id) {
        this.subCatId = Id;
        let params = {
            "category_id": this.categoryId,
            "subcategory_id": this.subCatId
        }
        if (this.role === 'wholesaler') {
            this.appService.getAdminProds(params).subscribe(res => {
                this.prodName = res.json().data;
                // console.log(this.prodName);
                // debugger;
            })
        }

    }
    // value = [];
    selectedExpressValue = false;
    selectedNormalValue = true;
    checkbox(evt: boolean, id, data, index) {
        this.isChecked = evt;
        for (var i = 0; i < this.list.length; i++) {
            if (this.isChecked) {
                if (this.list[i].id === id && data.title === 'Express Delivery') {
                    this.isChecked = evt;
                    this.selectedExpressValue = true;
                    this.selectedNormalValue = true;
                    for (var i = 0; i < this.skusData.length; i++) {
                        if (i === index) {
                            this.skusData[i].express_delivery = this.selectedExpressValue;
                            this.skusData[i].normal_delivery = this.selectedExpressValue;
                            return;
                        }
                    }
                    return;
                }
            } else {
                this.selectedExpressValue = false;
                this.selectedNormalValue = true;
                return;
            }
        }
    }
    checkboxVeg(evt: boolean, id, data, index) {
        this.type = evt;
        // this.isChecked = evt;
        // for (var i = 0; i < this.list.length; i++) {
        //     if (this.isChecked) {
        //         if (this.list[i].id === id && data.name === 'Other') {
        //             this.isChecked = evt;
        //             this.selectedExpressValue = true;
        //             this.selectedNormalValue = true;
        //             for (var i = 0; i < this.skusData.length; i++) {
        //                 if (i === index) {
        //                     this.skusData[i].express_delivery = this.selectedExpressValue;
        //                     this.skusData[i].normal_delivery = this.selectedExpressValue;
        //                     return;
        //                 }
        //             }
        //             return;
        //         }
        //     } else {
        //         this.selectedExpressValue = false;
        //         this.selectedNormalValue = true;
        //         return;
        //     }
        // }
    }
    //add product
    getCat() {
        if (this.wholeType === "grocery") {
            this.appService.getGroceryCat()
                .subscribe(resp => {
                    if (resp.json().status === 200) {
                        this.category = resp.json().categories;
                        console.log(this.category);
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        } else {
            this.appService.getEcomCat()
                .subscribe(resp => {
                    if (resp.json().status === 200) {
                        this.category = resp.json().categories;
                        console.log(this.category);
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        }

    }


    subCategoryId: any;
    // getSubCategory() {
    //     for (var i = 0; i < this.category.length; i++) {

    //     }
    // }

    imagesData = [];
    lastIndex;
    replace;

    // onSelectFile(event) {
    //     this.images = [];
    //     if (event.target.files && event.target.files[0]) {
    //         var filesAmount = event.target.files.length;
    //         for (let i = 0; i < filesAmount; i++) {
    //             const fileReader: FileReader = new FileReader();
    //             fileReader.onload = (event) => {
    //                 if (this.selectedImage === '' || this.selectedImage === undefined || this.selectedImage === null) {
    //                     if (this.imagesData.length !== 0) {
    //                         this.lastIndex = this.imagesData[this.imagesData.length - 1]
    //                         this.imagenum = parseInt(this.lastIndex.key) + 1;
    //                         this.imagesData.push({ 'key': this.imagenum });
    //                         this.productImg.push({ 'image': fileReader.result, 'key': this.imagenum });

    //                     } else {
    //                         this.imagenum = this.urls.push(fileReader.result);
    //                     }
    //                 } else {
    //                     this.imagenum = this.selectedImage;
    //                     for (var i = 0; i < this.productImg.length; i++) {
    //                         if (this.productImg[i].key === this.imagenum) {
    //                             this.productImg.splice(i, 1)
    //                         }
    //                     }
    //                     this.productImg.push({ 'image': fileReader.result, 'key': this.imagenum });
    //                 }
    //                 this.img = fileReader.result;
    //                 this.strImage = this.img.split(',')[1];
    //                 this.images.push({ image_no: this.imagenum, image_data: this.strImage });
    //             }
    //             fileReader.readAsDataURL(event.target.files[i]);
    //         }
    //     }
    // }
    newSkuData = [];
    onSelectFile(event, index, skid) {
        // this.images = [];
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                const fileReader: FileReader = new FileReader();
                fileReader.onload = (event) => {
                    this.skuImage = '';
                    if (this.action !== '') {
                        if (this.selectedImage === undefined) {
                            this.img = fileReader.result;
                            this.strImage = this.img.split(',')[1];
                            // this.productDetails[0].myImages.push({ 'id': '', 'product_image': fileReader.result });
                            // this.images.push({ 'image_no': '', 'image_data': this.strImage })

                            for (var i = 0; i < this.skusData.length; i++) {
                                if (i === index) {

                                    this.skusData[i].sku_images.push({
                                        sku_image: this.img,
                                        product_id: parseInt(this.action),
                                        new_image: this.strImage,
                                        sku_img_path: '',
                                        id: '',
                                        sku_id: this.skusData[i].skid

                                    })


                                    this.skusData[i].images = this.skusData[i].sku_images;
                                    console.log(this.skusData[i].sku_images);
                                    this.newSkuData.push(this.skusData[i]);
                                    for (var j = 0; j < this.newSkuData.length; j++) {
                                        if (skid === this.newSkuData[j].skid) {
                                            this.newSkuData.splice(j, 1);
                                            return;
                                        }
                                    }
                                    return;
                                }
                            }
                        } else {
                            this.img = fileReader.result;
                            this.strImage = this.img.split(',')[1];


                            for (var i = 0; i < this.skusData.length; i++) {
                                if (i === index) {
                                    this.newSkuData.push(this.skusData[i]);
                                }
                            }

                            for (var j = 0; j < this.newSkuData[0].sku_images.length; j++) {
                                if (this.selectedImage === this.newSkuData[0].sku_images[j].id) {
                                    this.newSkuData[0].sku_images.splice(j, 1);
                                }
                            }

                            this.newSkuData[0].sku_images.push({
                                "sku_img_path": this.skuImge,
                                'sku_image': this.img,
                                'id': this.selectedImage,
                                'sku_id': this.imgSku,
                                "product_id": this.newSkuData[0].product_id,
                                "new_image": this.strImage
                            })



                            // for (var i = 0; i < this.skusData.length; i++) {
                            //     // this.skusData[i].sku_images.push()
                            //     for (var j = 0; j < this.skusData[i].sku_images.length; j++) {
                            //         if (this.selectedImage === this.skusData[i].sku_images[j].id) {
                            //             this.skusData[i].sku_images.splice(j, 1);
                            //             // this.skusData[i].sku_images[j].sku_image = fileReader.result;
                            //             //                                         this.skusData[i].sku_images.push({
                            //             //                                             "id": this.selectedImage,
                            //             //                                             "sku_id": this.skusData[i].sku_images[j].sku_id,
                            //             //                                             "sku_image": this.img,
                            //             //                                             "product_id": this.skusData[i].sku_images[j].product_id,
                            //             //                                         })
                            //             // j
                            //             //                                         if (this.skusData[i].sku_images[j].id === this.selectedImage) {
                            //             //                                             this.skusData[i].sku_images.splice(j, 1);
                            //             //                                         }



                            //             this.skusData[i].images.push({
                            //                 "id": this.selectedImage,
                            //                 "sku_id": this.skusData[i].sku_images[j].sku_id,
                            //                 "sku_image": this.strImage,
                            //                 "product_id": this.skusData[i].sku_images[j].product_id,
                            //                 "sku_img_path": this.skusData[i].sku_images[j].sku_image,
                            //             })

                            //             for (var k = 0; k < this.skusData[i].images.length; k++) {
                            //                 if (this.skusData[i].images[k].id === this.selectedImage) {
                            //                     this.skusData[i].images.splice(k, 1);
                            //                 }
                            //             }
                            //         }
                            //     }

                            //     this.skusData[i].sku_images.push({
                            //         "sku_image": this.img,
                            //         "id": this.selectedImage
                            //     })
                            // }

                            // for (var i = 0; i < this.productDetails[0].myImages.length; i++) {
                            //     if (this.productDetails[0].myImages[i].id === this.selectedImage) {
                            //         this.productDetails[0].myImages.splice(i, 1)
                            //     }
                            // }
                            // this.productDetails[0].myImages.push({ 'id': this.selectedImage, 'product_image': fileReader.result });
                            // this.images.push({ 'image_no': this.selectedImage, 'image_data': this.strImage })
                            // this.imagenum = this.urls.push(fileReader.result);
                        }
                    } else {

                        for (var i = 0; i < this.skusData.length; i++) {
                            if (i === index) {
                                this.img = fileReader.result;
                                this.strImage = this.img.split(',')[1];
                                this.urls.push({ sku_image: fileReader.result });
                                this.images.push(this.strImage);
                                // this.skusData[i].image = myReader.result;
                                this.skusData[i].skuImage = this.images;
                                this.skusData[i].sku_images = this.urls;
                                return;
                            }
                        }
                    }
                }
                fileReader.readAsDataURL(event.target.files[i]);
            }
        }
    }

    insertProduct() {
        for (var i = 0; i < this.skusData.length; i++) {
            this.skusData[i].quantity = this.skusData[i].quantity.toString();
            this.skusData[i].stock = this.skusData[i].stock.toString();
            this.skusData[i].country = this.selcountry;
            this.skusData[i].state = this.selstate;
            this.skusData[i].city = this.selcity;
            this.skusData[i].area = this.selarea;
            this.skusData[i].terms = this.skusData[i].termscnd;
            this.skusData[i].faq = this.skusData[i].question;
            this.skusData[i].answer = this.skusData[i].answer;
        }
        var data = {
            // 'id': this.productId,
            'title': this.prodName.length === 0 ? this.formdata.proName : this.product_name.product_name,
            'category_id': this.categoryId,
            'brand_name': this.formdata.Manufacture,
            'subcategory_id': this.subCatId,
            'brand_id': 123,
            'type': this.product_type,
            "wholesaler_id": this.wholeId || 0,
            "country": this.country,
            // 'warehouse': this.dataWare,
            // 'country': this.country,
            // 'state': this.state,
            // 'city': this.city,
            // 'area': this.area,
            // 'image': this.images,
            // 'actual_price': this.actualPrice,
            // 'selling_price': this.sellingPrice,
            // 'quality_image': this.strImage,
            // 'discount_type': this.discountOption,
            // 'discount_percentage': this.disAmount,
            // 'express_delivery': this.selectedExpressValue,
            // 'normal_delivery': this.selectedNormalValue,
            // 'description': this.Description,
            // 'specification': this.specification,
            // 'terms': this.terms,

            'sku': this.skusData,
            // 'question': this.faq,
            // 'answer': this.answer,

        }
        this.spinnerService.show();
        this.appService.insertProduct(data)
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.spinnerService.hide();
                    swal('product added successfully', '', 'success');
                    this.router.navigate(['/prducts']);
                }
            },
                error => {
                    console.log(error, "error");
                })
    }
    insertProductAdmin() {
        let inData = {
            'category_id': this.categoryId,
            'brand_name': this.formdata.Manufacture,
            'subcategory_id': this.subCatId,
            "country": this.formdata.country,
            'product_name': this.prodName.length === 0 ? this.formdata.proName : this.product_name.product_name,
        }
        this.appService.insertAdminProd(inData).subscribe(res => {
            if (res.json().status === 200) {
                swal(res.json().message, "", "success");
            } else {
                swal(res.json().message, "", "error");

            }
        })
    }
    productImg = [];

    updateImage(index, skuId, image) {
        this.selectedImage = index;
        this.imgSku = skuId;
        this.skuImge = image;
    }
    removeImgPopup() {
        this.removeImg = !this.removeImg;
    }
    deleteImg: any;
    DeleteImg(i) {
        swal("Do you want to delete?", "", "warning", {
            buttons: ["Cancel!", "Okay!"],
        }).then((value) => {

            if (value === true) {
                this.deleteImg = i;
                var data = {
                    'id': this.deleteImg
                }
                // this.appService.deleteProdImg(data).subscribe(resp => {

                //     this.router.navigate(['/prducts']);
                // })
            } else {
                return;
            }
        });

    }


    // image;

    // changeListener($event): void {
    //     this.readThis($event.target);
    // }

    // readThis(inputValue: any): void {
    //     var file: File = inputValue.files[0];
    //     var myReader: FileReader = new FileReader();

    //     myReader.onloadend = (e) => {
    //         this.image = myReader.result;
    //         this.strImage = this.image.split(',')[1];
    //     }
    //     myReader.readAsDataURL(file);
    // }

    // image1;
    // changeListener1($event, index): void {
    //     this.readThis1($event.target, index);
    // }

    // readThis1(inputValue: any, index): void {
    //     this.vegImage = ''
    //     var file: File = inputValue.files[0];
    //     var myReader1: FileReader = new FileReader();

    //     myReader1.onloadend = (e) => {
    //         this.image1 = myReader1.result;
    //         this.vegImage = this.image1.split(',')[1];
    //         for (var i = 0; i < this.skusData.length; i++) {
    //             if (i === index) {
    //                 // this.skusData[i].image = myReader.result;
    //                 this.skusData[i].vegImage = this.vegImage;
    //             }
    //         }
    //     }
    //     myReader1.readAsDataURL(file);
    // }

    // urls1 = [];
    // img1: any;
    // strImage1: any;
    // images1 = [];
    // onSelectFile1(event, index) {
    //     if (event.target.files && event.target.files[0]) {
    //         var filesAmount = event.target.files.length;
    //         for (let i = 0; i < filesAmount; i++) {
    //             const fileReader: FileReader = new FileReader();

    //             fileReader.onload = (event: Event) => {
    //                 this.img1 = fileReader.result;
    //                 this.strImage1 = this.img1.split(',')[1];
    //                 this.images1.push(this.strImage1);
    //                 for (var i = 0; i < this.skusData.length; i++) {
    //                     if (i === index) {
    //                         // this.skusData[i].image = myReader.result;
    //                         this.skusData[i].skuImage = this.images1;
    //                     }
    //                 }
    //             }

    //             fileReader.readAsDataURL(event.target.files[i]);
    //         }
    //     }
    // }

    image2;

    changeListener($event, index): void {
        this.readThis($event.target, index);
    }

    readThis(inputValue: any, index): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image2 = myReader.result;
            this.strImage = this.image2.split(',')[1];
            if (this.action !== '') {
                for (var i = 0; i < this.skusData.length; i++) {
                    if (i === index) {
                        this.skusData[i].image1 = myReader.result;
                        this.skusData[i].image_quality_path = this.skusData[i].quality_image;
                        this.skusData[i].quality_image = this.strImage;
                    } else {
                        this.skusData[i].image_quality_path = this.skusData[i].quality_image;
                        this.skusData[i].quality_image = '';
                    }
                }
            } else {
                for (var i = 0; i < this.skusData.length; i++) {
                    if (i === index) {
                        this.skusData[i].image1 = myReader.result;
                        this.skusData[i].image_quality_path = this.skusData[i].quality_image;
                        this.skusData[i].quality_image = this.strImage;
                        return;
                    }
                }
            }
        }
        myReader.readAsDataURL(file);
    }

    sku() {
        this.skuImg = '';
        this.vegImage = '';
        this.selectedImage = undefined;
        // this.quality_image = ''
        // this.images1 = [];
        this.images = [];
        this.urls = [];
        // this.image1 = [];
        this.skusData.push({
            size: '',
            quantity: '',
            mrp: '',
            offer: '',
            sellingPrice: '',
            stock: '',
            skuImage: this.skuImg,
            quality_image: this.vegImage,
            image: this.type,
            country: '',
            state: '',
            city: '',
            area: '',
            // express_delivery: false,
            // normal_delivery: this.selectedNormalValue,
            Description: '',
            specification: '',
            termscnd: '',
            image1: '',
            units: '',
            terms: {
                "id": '',
                "data": '',
                "last_updated": '',
                "is_footer": '',
                "product_id": '',
                "sku_id": ''
            },
            faq: {
                "id": '',
                "question": '',
                "answer": '',
                "product_id": '',
                "sku_id": ''
            },
            question: '',
            answer: '',
            sku_images: [
                // {
                //     sku_image: '',
                //     id: '',
                //     sku_id: ''
                // }
            ]

        });
    }
    sku_Id;
    product_Id;
    deleteSku(index, skid, productid) {
        if (this.action === '') {
            this.skusData.splice(index, 1);
        }
        else {
            this.spinnerService.show();
            swal("Do you want to delete?", "", "warning", {
                buttons: ["Cancel!", "Okay!"],
            }).then((value) => {

                if (value === true) {
                    var data = {
                        'product_id': productid,
                        'skid': skid
                    }
                    // this.appService.deleteSkuProduct(data).subscribe(resp => {
                    //     if (resp.json().status === 200) {
                    //         this.spinnerService.hide();
                    //         swal('Delete sku successfully', '', 'success');
                    //         this.router.navigate(['/prducts']);
                    //         this.getProduct();
                    //     }
                    // }),
                    error => {
                        console.log(error, "error");
                    }
                } else {
                    return;
                }
            });
        }

        // this.sku_Id = skid;
        // this.productId = productid;

    }
    updateProduct() {
        this.spinnerService.show();
        // setTimeout(() => this.spinnerService.hide(), 12000)
        for (var k = 0; k < this.skusData.length; k++) {
            this.skusData[k].product_id = this.action;
            this.skusData[k].image_quality_path = this.skusData[k].image_quality_path;
            if (this.image2 === undefined) {
                this.skusData[k].image_quality_path = this.skusData[k].quality_image;
                this.skusData[k].quality_image = (this.image2 === undefined || this.image2 === '') ? '' : this.strImage;
            }

            for (var j = 0; j < this.skusData[k].sku_images.length; j++) {
                if (this.skusData[k].sku_images[j].sku_img_path === undefined) {
                    // this.skusData[k].sku_images[j].id = this.skusData[k].sku_images[j].sku_image_id;
                    // this.skusData[k].sku_images[j].sku_id = this.skusData[k].skid;
                    this.skusData[k].sku_images[j].product_id = this.action;
                    this.skusData[k].sku_images[j].sku_img_path = '';
                    this.skusData[k].sku_images[j].new_image = '';
                }

            }

        }

        this.newSkuData = this.skusData;

        for (var i = 0; i < this.newSkuData.length; i++) {
            this.newSkuData[i].terms = {
                "id": (this.newSkuData[i].terms === '' || this.newSkuData[i].terms === undefined) ? '' : this.newSkuData[i].terms.id,
                "data": this.newSkuData[i].termscnd,
                "last_updated": new Date(),
                "is_footer": null,
                "product_id": parseInt(this.newSkuData[i].product_id),
                "sku_id": this.newSkuData[i].skid
            }

            // this.newSkuData[i].faq = {
            //     "id": (this.newSkuData[i].faq === '' || this.newSkuData[i].faq === undefined) ? '' : this.newSkuData[i].faq.id,
            //     "question": this.newSkuData[i].question,
            //     "answer": this.newSkuData[i].answer,
            //     "product_id": parseInt(this.newSkuData[i].product_id),
            //     "sku_id": this.newSkuData[i].skid
            // }

            this.updatedSkus.push({
                "skid": this.newSkuData[i].skid,
                // "id": parseInt(this.newSkuData[i].product_id),
                "size": this.newSkuData[i].size,
                "product_id": parseInt(this.newSkuData[i].product_id),
                // "type": this.newSkuData[i].type,
                "actual_price": (this.newSkuData[i].actual_price === undefined) ? parseInt(this.newSkuData[i].mrp) : this.newSkuData[i].actual_price,
                "mrp": (this.newSkuData[i].mrp === undefined) ? parseInt(this.newSkuData[i].mrp) : this.newSkuData[i].mrp,
                "min_quantity": (this.newSkuData[i].quantity !== undefined) ? parseInt(this.newSkuData[i].quantity) : this.newSkuData[i].min_quantity,
                "stock": this.newSkuData[i].stock,
                "selling_price": (this.newSkuData[i].sellingPrice !== undefined) ? parseInt(this.newSkuData[i].sellingPrice) : this.newSkuData[i].selling_price,
                "offer_price": (this.newSkuData[i].offer !== undefined) ? parseInt(this.newSkuData[i].offer) : this.newSkuData[i].offer_price,
                // "image": this.type,
                // "express_delivery": this.newSkuData[i].express_delivery,
                // "normal_delivery": this.newSkuData[i].normal_delivery,
                // "image_quality_path": (this.newSkuData[i].image_quality_path === undefined) ? '' : this.newSkuData[i].image_quality_path,
                "quality_image": this.newSkuData[i].quality_image,
                // "description": (this.newSkuData[i].description === undefined) ? this.newSkuData[i].Description : this.newSkuData[i].description,
                "description": this.newSkuData[i].description,
                "specification": this.newSkuData[i].specification,
                "sku_images": this.newSkuData[i].sku_images
                // "country": this.newSkuData[i].country,
                // "state": this.newSkuData[i].state,
                // "city": this.newSkuData[i].city,
                // "area": this.newSkuData[i].area,
                // "sku_images": this.newSkuData[i].sku_images,
                // "terms": this.newSkuData[i].terms,
                // "faq": this.newSkuData[i].faq
            })
            console.log(this.updatedSkus);
            // this.updateSkuImg.push({
            //     "id": "223",
            //     "sku_id": this.newSkuData[i].skid,
            //     "sku_image": this.newSkuData[i].sku_images,
            //     "product_id": "",
            //     "sku_img_path": "",
            //     "new_image": ""

            // })

        }
        // {
        //     "id": 2158,
        //         "title": "mixed1",
        //             "category_id": 126,
        //                 "subcategory_id" : "146",
        //                     "brand_name": "FugenX",
        //                         "type" : "Main Product",
        //                             "sku": [
        //                                 {
        //                                     "skid": 767,
        //                                     "product_id": 2158,
        //                                     "size": "2",
        //                                     "actual_price": 500,
        //                                     "mrp": 500,
        //                                     "min_quantity": 2,
        //                                     "stock": 5,
        //                                     "selling_price": 400,
        //                                     "offer_price": 100,
        //                                     "quality_image": "http://versatilemobitech.co.in/Mahali/images/6_23_3_30_9263o2684qwjsy86fet.png",



        //                                     "sku_images": [
        //                                         {
        //                                             "id": "223",
        //                                             "sku_id": 79,
        //                                             "sku_image": "http://versatilemobitech.co.in/Mahali/images/6_23_3_30_9263o2684qwjsy86ffi.png",
        //                                             "product_id": "",
        //                                             "sku_img_path": "",
        //                                             "new_image": ""
        //                                         }

        //                                     ]

        //                                 }
        //                             ]
        // }
        var data = {
            "id": this.productId,
            "title": this.formdata.proName,
            "category_id": this.cat_id,
            "subcategory_id": this.subCat_id,
            "type": this.prodtype,
            "is_active": this.is_active,
            "brand_id": this.brand_id,
            "brand_name": this.formdata.Manufacture,
            "sku": this.updatedSkus,
            // "sku_images": this.skuImagesData
        }
        this.appService.updateProduct(this.productId, data)
            .subscribe(resp => {
                if (resp.json().status === 200) {
                    this.category = resp.json().result;
                    this.spinnerService.hide();
                    swal('update product successfully', '', 'success')
                    this.router.navigate(['/prducts']);
                    this.getProduct();
                }
                else {
                }
            },
                error => {
                    console.log(error, "error");
                })
    }

    discountOption: any;
    changeDiscountOpt(event) {
        this.discountOption = event;
        if (this.discountOption === 'Rupees') {
            this.amount = true;
            this.percentage = false;
        }
        else {
            this.amount = false;
            this.percentage = true;
        }
    }

    //get country
    getLocation() {
        // this.appService.getLocation().subscribe(resp => {
        //     this.locationData = resp.json().result;
        //     sessionStorage.setItem('locationData', JSON.stringify(this.locationData));
        //     for (var i = 0; i < this.locationData.length; i++) {
        //         this.countryData.push(this.locationData[i].country);
        //     }

        //     for (var i = 0; i < this.countryData.length; i++) {
        //         this.countrys = _.uniq(this.countryData, function (obj) {
        //             return obj;
        //         });
        //     }
        // })
    }

    //get state
    getStates(country) {
        this.selcountry = country;
        this.statesData = [];

        // console.log(sessionStorage.locationData);
        for (var i = 0; i < this.locationData.length; i++) {
            if (this.locationData[i].country === country) {
                this.statesData.push(this.locationData[i].state);
            }
        }

        for (var i = 0; i < this.statesData.length; i++) {
            this.states = _.uniq(this.statesData, function (obj) {
                return obj;
            });
            // this.sValues.push(this.states);
        }
    }

    //get city
    getCitys(state) {
        this.selstate = state;
        this.citysData = [];
        this.areas = [];
        for (var i = 0; i < this.locationData.length; i++) {
            if (this.locationData[i].state === state) {
                this.citysData.push(this.locationData[i].city);
            }
        }

        for (var i = 0; i < this.citysData.length; i++) {
            this.citys = _.uniq(this.citysData, function (obj) {
                return obj;
            });
            // this.sValues.push(this.states);
        }
    }

    //get area
    getArea(city) {
        this.selcity = city;
        this.areasData = [];
        for (var i = 0; i < this.locationData.length; i++) {
            if (this.locationData[i].city === city) {
                this.areasData.push(this.locationData[i].area);
            }
        }

        for (var i = 0; i < this.areasData.length; i++) {
            this.areas = _.uniq(this.areasData, function (obj) {
                return obj;
            });
            // this.sValues.push(this.states);
        }
    }

    //chage area
    changeArea(area) {
        this.selarea = area;
    }

    // foodType(value, index) {

    //     if (value === true) {
    //         this.type = 'Vegetrian'
    //     }
    //     else {
    //         this.type = 'NonVegetrian'
    //     }
    //     for (var i = 0; i < this.skusData.length; i++) {
    //         if (i === index) {
    //             this.skusData[i].image = this.type

    //         }
    //     }
    // }
    product_type: any;
    productType(value) {
        this.product_type = value;
    }
    setAreaAddress(addrObj) {
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(() => {
            this.addr = addrObj;
            this.addrKeys = Object.keys(addrObj);
            this.position2 = addrObj.formatted_address;
            this.positionValue2 = this.position2.split(',');
            this.pin_code = addrObj.postal_code;
            this.country = addrObj.country;
            this.area = addrObj.locality === undefined ? addrObj.admin_area_l1 === undefined ? addrObj.formatted_address : addrObj.admin_area_l1 : addrObj.locality;
            console.log(addrObj);
        });
    }
}
