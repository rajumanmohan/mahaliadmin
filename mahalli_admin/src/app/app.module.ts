import { AddwarehouseComponent } from './components/ware-house/addwarehouse.component';
import { AddAreaComponent } from './components/area/addarea.component';
import { AddCityComponent } from './components/city/addcity.component';
// import { AreaModule } from './components/area/area/area.module';
// import { CityModule } from './components/city/city/city.module';
import { AgmCoreModule } from '@agm/core';
//modules
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import swal from 'sweetalert'
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { routing } from './app.routing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot.password';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgSelectModule } from '@ng-select/ng-select';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

// import { WareHouseComponent } from './components/banner/';
import { AddHelpBannerComponent } from './components/banner/help-banner/add.help-banner';
import { AddOffersBannerComponent } from './components/banner/offer-banner/add.offer-banner';
import { AddBrandComponent } from './components/banner/best-brands/add.brand';

import { BestDiscountApplianceComponent } from './components/banner/best-discount-appliance/best-discount-appliance.component';

import { AddBestAppliancesComponent } from './components/banner/best-appliances/add.best-appliances';

import { addDealsComponent } from './components/banner/best-deals/add.deal';

import { AddlocationComponent } from './components/location/add.location';
import { AddSlotComponent } from './components/slot/add.slot';
import { AddBannerComponent } from './components/banner/add.banner';
import { BannerComponent } from './components/banner/banner.component';
import { AddOffersComponent } from './components/offers/add.offer';
import { AddDeliveryComponent } from './components/delivery/add.delivery';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
// import * as xlsx from "xlsx";

//side menus
import { LogNavComponent } from './components/sidenav/logo.nav';
import { ProfileNavComponent } from './components/sidenav/profile.nav';
import { HeaderNavComponent } from './components/sidenav/header.nav';

//categories
import { CategoriesComponent } from './components/categories/categories';
import { AddCatComponent } from './components/categories/add.cat';
import { AddSubCatComponent } from './components/categories/add.sub.cat';
import { SubCatComponent } from './components/categories/subcategories';

//products
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/products/add.product';

//users
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/users/add.user';

//wholesellers
import { WholesellersComponent } from './components/wholesellers/wholesellers.component';
import { AddWholesellersComponent } from './components/wholesellers/add.wholeseller';

//vendors
import { VendorsComponent } from './components/vendors/vendors.component';
import { AddVendorsComponent } from './components/vendors/add.vendor';
import { productsForapproval } from './components/vendors/products.approval';


//orders
import { OrdersComponent } from './components/orders/orders.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SafePipeModule } from 'safe-pipe';
import { ProductService } from './services/productService'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
// service
import { AppService } from './services/mahali/mahali-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ExcelService } from './services/excel.service';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { LocationComponent } from './components/location/location.component';
import { SlotComponent } from './components/slot/slot.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { BestDealsComponent } from './components/banner/best-deals/best-deals.component';
import { BestDiscountComponent } from './components/banner/best-discount/best-discount.component';
import { BestBrandsComponent } from './components/banner/best-brands/best-brands.component';
import { BestAppliancesComponent } from './components/banner/best-appliances/best-appliances.component';
// import { BestDiscountAppliancesComponent } from './components/banner/best-discount-appliances/best-discount-appliances.component';
import { AddBestDiscountComponent } from './components/banner/best-discount/add.discount';
import { addDiscountAppliances } from './components/banner/best-discount-appliance/add.best-discount-appliance';
import { HelpBannerComponent } from './components/banner/help-banner/help-banner.component';
import { OfferBannerComponent } from './components/banner/offer-banner/offer-banner.component';
import { WareHouseComponent } from './components/ware-house/ware-house.component';
import { CityComponent } from './components/city/city.component';
import { AreaComponent } from './components/area/area.component';
import { WholesalerproductsComponent } from './components/wholesalerproducts/wholesalerproducts.component';
import { VendorProductsComponent } from './components/vendor-products/vendor-products.component';
import { TopSellersComponent } from './components/top-sellers/top-sellers.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { StaffComponent } from './components/staff/staff.component';
import { getStaffComponent } from './components/staff/get_staff';
import { ProfileComponent } from './components/profile/profile.component';
import { SuggestedProductsComponent } from './components/suggested-products/suggested-products.component';
import { FeatureBrandsComponent } from './components/banner/feature-brands/feature-brands.component';
import { editSuggestedComponent } from './components/suggested-products/edit-suggested-product';
import { AdminCountComponent } from './components/admin-count/admin-count.component';
import { orderDetails } from './components/orders/order.details';
// import { ExcelService } from './excel.service';
// import {MatDatepickerModule,MatNativeDateModule } from '@angular/material/datepicker';
import { NumberOnlyDirective } from './directives/number';
import { CommisionComponent } from './components/commision/commision.component';
import { GooglePlacesDirective } from './directives/google-places.directive';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgotPasswordComponent,
        CategoriesComponent,
        LogNavComponent,
        ProfileNavComponent,
        AddCatComponent,
        AddSubCatComponent,
        SubCatComponent,
        HeaderNavComponent,
        ProductsComponent,
        AddProductsComponent,
        UsersComponent,
        AddCityComponent,
        AddUsersComponent,
        WholesellersComponent,
        AddWholesellersComponent,
        VendorsComponent,
        AddVendorsComponent,
        OrdersComponent,
        ImageUploadComponent,
        DeliveryComponent,
        AddDeliveryComponent,
        OffersComponent,
        AddOffersComponent,
        ContentManagementComponent,
        BannerComponent,
        AddBannerComponent,
        LocationComponent,
        SlotComponent,
        AddSlotComponent,
        AddlocationComponent,
        AboutUsComponent,
        DeliveryInfoComponent,
        PrivacyPolicyComponent,
        ReturnsComponent,
        BestDealsComponent,
        BestDiscountComponent,
        BestBrandsComponent,
        BestAppliancesComponent,
        addDealsComponent,
        AddAreaComponent,
        editSuggestedComponent,
        orderDetails,
        // BestDiscountAppliancesComponent,
        AddBestDiscountComponent,
        AddBestAppliancesComponent,
        BestDiscountApplianceComponent,
        addDiscountAppliances,
        AddBrandComponent,
        HelpBannerComponent,
        OfferBannerComponent,
        AddOffersBannerComponent,
        AddHelpBannerComponent,
        WareHouseComponent,
        CityComponent,
        AreaComponent,
        AddwarehouseComponent,
        WholesalerproductsComponent,
        VendorProductsComponent,
        TopSellersComponent,
        OurBlogComponent,
        NewsLetterComponent,
        StaffComponent,
        ProfileComponent,
        getStaffComponent,
        SuggestedProductsComponent,
        FeatureBrandsComponent,
        AdminCountComponent,
        productsForapproval,
        NumberOnlyDirective,
        CommisionComponent,
        // WareHouseComponent
        GooglePlacesDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        Ng2SearchPipeModule,
        MatButtonModule,
        MatCheckboxModule,
        MyDatePickerModule,
        CKEditorModule,
        NgSelectModule,
        AmazingTimePickerModule,
        MatSlideToggleModule,
        IntlModule,
        NgxPaginationModule,
        DateInputsModule,
        SafePipeModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyClUICP4-qGf2r4SSCZF5MzbSFXT6mIbvM",
            libraries: ["places"]
        }),
        // CityModule,
        // AreaModule,
        MultiselectDropdownModule,
        Ng4LoadingSpinnerModule.forRoot(),
        Ng4GeoautocompleteModule.forRoot(),
        // MatNativeDateModule,
        // MatDatepickerModule,
        TooltipModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'wholesaler', component: LoginComponent },
            { path: 'forgotpassword', component: ForgotPasswordComponent },
            { path: 'category', component: CategoriesComponent, data: [{ page: 'categorie' }] },
            { path: 'addcategory', component: AddCatComponent, data: [{ page: 'addcategorie' }] },
            { path: 'subcategory', component: SubCatComponent, data: [{ page: 'subcategorie' }] },
            { path: 'addsubcategory', component: AddSubCatComponent, data: [{ page: 'addsubcategorie' }] },
            { path: 'prducts', component: ProductsComponent, data: [{ page: 'products' }] },
            { path: 'addprducts', component: AddProductsComponent, data: [{ page: 'addproducts' }] },
            { path: 'users', component: UsersComponent, data: [{ page: 'users' }] },
            { path: 'addusers', component: AddUsersComponent, data: [{ page: 'addusers' }] },
            { path: 'wholesellers', component: WholesellersComponent, data: [{ page: 'wholesellers' }] },
            { path: 'addwholesellers', component: AddWholesellersComponent, data: [{ page: 'addwholesellers' }] },
            { path: 'vendors', component: VendorsComponent, data: [{ page: 'vendors' }] },
            { path: 'addvendors', component: AddVendorsComponent, data: [{ page: 'addvendors' }] },
            { path: 'vendrorders', component: OrdersComponent, data: [{ page: 'vendrorders' }] },
            { path: 'userorders', component: OrdersComponent, data: [{ page: 'userorders' }] },
            { path: 'imageUpload', component: ImageUploadComponent, data: [{ page: 'imageupload' }] },
            { path: 'delivery', component: DeliveryComponent, data: [{ page: 'addDelivery' }] },
            { path: 'addDelivery', component: AddDeliveryComponent, data: [{ page: 'addDelivery' }] },
            { path: 'offers', component: OffersComponent, data: [{ page: 'addOffers' }] },
            { path: 'addOffers', component: AddOffersComponent, data: [{ page: 'addOffers' }] },
            { path: 'content', component: ContentManagementComponent, data: [{ page: 'content' }] },
            { path: 'addcontent', component: ContentManagementComponent, data: [{ page: 'addcontent' }] },
            { path: 'banner', component: BannerComponent, data: [{ page: 'banner' }] },
            { path: 'bestAppliances', component: BestAppliancesComponent, data: [{ page: 'bestAppliances' }] },
            { path: 'addbestAppliances', component: AddBestAppliancesComponent, data: [{ page: 'addbestAppliances' }] },
            { path: 'dummyBannerU', component: BestDiscountApplianceComponent, data: [{ page: 'dummyBannerU' }] },
            { path: 'addDiscountAppliances', component: addDiscountAppliances, data: [{ page: 'addDiscountAppliances' }] },
            { path: 'bestBrands', component: BestBrandsComponent, data: [{ page: 'bestBrands' }] },
            { path: 'addBrands', component: AddBrandComponent, data: [{ page: 'addBrands' }] },
            { path: 'BrandCategories', component: BestDealsComponent, data: [{ page: 'BrandCategories' }] },
            { path: 'addbestDeals', component: addDealsComponent, data: [{ page: 'addbestDeals' }] },
            { path: 'bestDiscount', component: BestDiscountComponent, data: [{ page: 'bestDiscount' }] },
            { path: 'addbestDeals', component: addDealsComponent, data: [{ page: 'addbestDeals' }] },
            { path: 'addbestdiscount', component: AddBestDiscountComponent, data: [{ page: 'addbestdiscount' }] },
            { path: 'addbanner', component: AddBannerComponent, data: [{ page: 'addbanner' }] },
            { path: 'addlocation', component: AddlocationComponent, data: [{ page: 'addlocation' }] },
            { path: 'location', component: LocationComponent, data: [{ page: 'location' }] },
            { path: 'addslot', component: AddSlotComponent, data: [{ page: 'addslot' }] },
            { path: 'slot', component: SlotComponent, data: [{ page: 'slot' }] },
            { path: 'aboutUs', component: AboutUsComponent, data: [{ page: 'aboutUs' }] },
            { path: 'deliveryInfo', component: DeliveryInfoComponent, data: [{ page: 'deliveryInfo' }] },
            { path: 'privacy', component: PrivacyPolicyComponent, data: [{ page: 'privacy' }] },
            { path: 'returns', component: ReturnsComponent, data: [{ page: 'returns' }] },
            { path: 'DummyBanner', component: OfferBannerComponent, data: [{ page: 'DummyBanner' }] },
            { path: 'addoffersBanners', component: AddOffersBannerComponent, data: [{ page: 'addoffersBanners' }] },
            { path: 'helpBanners', component: HelpBannerComponent, data: [{ page: 'helpBanners' }] },
            { path: 'addhelpBanners', component: AddHelpBannerComponent, data: [{ page: 'addhelpBanners' }] },
            { path: 'WareHouse', component: WareHouseComponent, data: [{ page: 'WareHouse' }] },
            { path: 'addwarehouse', component: AddwarehouseComponent, data: [{ page: 'addwarehouse' }] },
            { path: 'city', component: CityComponent, data: [{ page: 'city' }] },
            { path: 'addcity', component: AddCityComponent, data: [{ page: 'addcity' }] },
            { path: 'area', component: AreaComponent, data: [{ page: 'area' }] },
            { path: 'addarea', component: AddAreaComponent, data: [{ page: 'addarea' }] },
            { path: 'salerproducts', component: WholesalerproductsComponent, data: [{ page: 'salerproducts' }] },
            { path: 'vendorProducts', component: VendorProductsComponent, data: [{ page: 'vendorProducts' }] },
            { path: 'topSellers', component: TopSellersComponent, data: [{ page: 'topSellers' }] },
            { path: 'ourBlog', component: OurBlogComponent, data: [{ page: 'ourBlog' }] },
            { path: 'newsLetter', component: NewsLetterComponent, data: [{ page: 'newsLetter' }] },
            { path: 'staff', component: StaffComponent, data: [{ page: 'staff' }] },
            { path: 'getStaff', component: getStaffComponent, data: [{ page: 'getStaff' }] },
            { path: "profile", component: ProfileComponent, data: [{ page: "profile" }] },
            { path: "vendorProds", component: VendorProductsComponent, data: [{ page: "vendorProds" }] },
            { path: "suggestedProds", component: SuggestedProductsComponent, data: [{ page: "suggestedProds" }] },
            { path: "featureBrands", component: FeatureBrandsComponent, data: [{ page: "featureBrands" }] },
            { path: "editSuggested", component: editSuggestedComponent, data: [{ page: "editSuggested" }] },
            { path: "dashBoard", component: AdminCountComponent, data: [{ page: "dashBoard" }] },
            { path: 'approvalProds', component: productsForapproval, data: [{ page: 'approvalProds' }] },
            { path: 'orderDetails', component: orderDetails, data: [{ page: 'orderDetails' }] },
            { path: 'wholeCommision', component: CommisionComponent, data: [{ page: 'wholeCommision' }] },
            { path: 'VendorCommision', component: CommisionComponent, data: [{ page: 'VendorCommision' }] },


        ], { useHash: true }),
        BrowserAnimationsModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        AppService,
        ProductService,
        ExcelService
        // ExcelService
    ],
    bootstrap: [AppComponent],
    entryComponents: [],
    exports: [BrowserModule, TranslateModule]
})
export class AppModule { }
