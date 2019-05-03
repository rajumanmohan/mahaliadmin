import { AppSettings } from './../constants/constants';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    whole_id
    constructor(private http: Http) { }
    adminlogin(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.adminloginUrl, params, { headers: headers });
    }
    getCat() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getCatUrl, { headers: headers });
    }
    addCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.addCatUrl, params, { headers: headers });
    }
    updateCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.updateCat, params, { headers: headers });
    }
    deleteCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.deleteCat, params, { headers: headers });
    }
    getProduct() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getProductUrl, { headers: headers });
    }
    getProductbyId(id) {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getProductUrlbyId + id, { headers: headers });
    }
    deleteProduct(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.deleteProdUrl, params, { headers: headers });
    }
    updateProduct(prodId, params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.updateProdUrl + "/" + prodId, params, { headers: headers });
    }
    // deleteSkuProduct(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteSkuUrl, params, { headers: headers });
    // }
    insertProduct(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.insertProduct, params, { headers: headers })
    }
    insertSubCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.insertSubCat, params, { headers: headers })
    }
    getSubCategery() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getSubCategory, { headers: headers });
    }
    deleteSubCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.deleteSubCat, params, { headers: headers })
    }
    updateSubCat(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.updateSubCat, params, { headers: headers })
    }
    addWholeseller(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.addWholeSellerUrl, params, { headers: headers })
    }
    getWholeSeller() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getWholeSellerUrl, { headers: headers });
    }
    updateWholeSeller(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.updateWholeSellerUrl, params, { headers: headers })
    }
    deleteWholeSeller(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.deleteWholeSellerUrl, params, { headers: headers })
    }
    getUsersList() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getUsersUrl, { headers: headers });
    }
    getVendorsList() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getVendorsUrl, { headers: headers });
    }
    getBanners(type) {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getBannerUrl + "/" + type, { headers: headers });
    }
    addbanners(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.addbannerUrl, params, { headers: headers })
    }
    deletebanners(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.deletebannerUrl, params, { headers: headers })
    }
    changeProdStatus(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.changeSatusOfProd, params, { headers: headers })
    }
    saveFooter(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.saveFooter, params, { headers: headers })
    }
    getFooter(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.getFooter, params, { headers: headers })
    }
    updateFooter(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.updateFooter, params, { headers: headers })
    }
    getVouchers() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getVouchers, { headers: headers });
    }
    addVoucher(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.addVoucher, params, { headers: headers })
    }
    getVoucherById(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getVoucherById + "/" + params, { headers: headers })
    }
    deleteVoucher(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.delete(AppSettings.getVoucherById + "/" + params, { headers: headers })
    }
    updateVoucher(Id, params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.updateVoucher + "/" + Id, params, { headers: headers })
    }
    getAllVendorOrds() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getAllVendorOrders, { headers: headers })
    }
    addStaff(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.addStaff, params, { headers: headers })
    }
    staffLogin(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.staffLogin, params, { headers: headers })
    }
    getStaff() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getStaff, { headers: headers })
    }
    getVendorProds(vendorId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getVendorProds + "/" + vendorId, { headers: headers })
    }

    getWholesellerProds() {
        this.whole_id = (sessionStorage.wholesalerId)
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getWholesellerProds + "/" + this.whole_id, { headers: headers })
    }
    acceptProduct(vendorId, status) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.AcceptProduct + "/" + vendorId, status, { headers: headers })
    }
    updateWholesellerProds(params, prodId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.updateWholesellerPrords + "/" + prodId, params, { headers: headers })
    }
    getUserOrders() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getUserOrders, { headers: headers });
    }
    getsuggestedProds() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getsuggestedProds, { headers: headers });
    }
    getsugProdForCat(Id) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getsugProdForCat + "/" + Id, { headers: headers });
    }
    getCats() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getCategories, { headers: headers });
    }
    // getEcomcats() {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.getEcomcats, { headers: headers });
    // }
    getEcomSubcats() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getEcomSubCats, { headers: headers });
    }
    changeStatusOfSuggested(params, Id) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.changeSatusOfsuggest + "/" + Id, params, { headers: headers });
    }
    getGroceryProds() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getGroceryProds, { headers: headers });
    }
    getEcomProds() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getEcomProds, { headers: headers });
    }
    getAdminCount() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getAdminCount, { headers: headers });
    }
    getProdById(prodId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getProdById + "/" + prodId, { headers: headers });
    }
    prodsForAppr() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.approvalProds, { headers: headers });
    }
    orderById(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.ordById + "/" + params, { headers: headers });
    }
    updateVendorOrd(ordid, params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.updateVendorOrd + "/" + ordid, params, { headers: headers });
    }
    showinWebEcom(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.showinWebEcom, params, { headers: headers });
    }
    getEcomCatCount() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getCatEcomcount, { headers: headers });
    }
    getGroceryCat() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getGroceryCats, { headers: headers });
    }
    getEcomCat() {
        const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
        return this.http.get(AppSettings.getEcomCats, { headers: headers });
    }
    getWholesellerProdsByGro() {
        this.whole_id = (sessionStorage.wholesalerId)
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getWholeProdsGro + "/" + this.whole_id, { headers: headers })
    }
    getWholesellerProdsByEcom() {
        this.whole_id = (sessionStorage.wholesalerId)
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getWholeProdEcom + "/" + this.whole_id, { headers: headers })
    }
    getVendorOrdInWhole(wholeId) {
        this.whole_id = (sessionStorage.wholesalerId) || wholeId
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getVendorOrdInWhole + "/" + this.whole_id, { headers: headers })
    }
    orderDetailsByOrdId(orderId, wholeId) {
        this.whole_id = (sessionStorage.wholesalerId) || wholeId
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.orderDetailsByOrdId + "/" + orderId + "/" + this.whole_id, { headers: headers })
    }
    orderChangeByProdId(prodId, params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.put(AppSettings.orderChangeByProdId + "/" + prodId, params, { headers: headers })
    }
    getWholeCommision() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getWholeCommision, { headers: headers })
    }
    getVendorCommision() {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.get(AppSettings.getVendorCommision, { headers: headers })
    }
    // uploadProductImg(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.uploadProductimg, params, { headers: headers })
    // }
    // public uploadFile(fileToUpload: File) {
    //     const _formData = new FormData();
    //     _formData.append('excelFile', fileToUpload, fileToUpload.name);
    //     return this.http.post(AppSettings.importExcel, _formData);
    // }
    // editproductImg(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.multiproductimgUrl, params, { headers: headers })
    // }
    // getSubCat(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getSubCatUrl, params, { headers: headers })
    // }
    // deleteProdImg(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteProImgUrl, params, { headers: headers })
    // }
    // getVendors() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getVendorUrl, { headers: headers })
    // }
    // getVendorsbyId(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.getVendorById + id, { headers: headers })
    // }
    updateVendorbyId(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.updateVendorById, params, { headers: headers })
    }
    getUserOrdByVenId(venId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        // this.vendor_id = sessionStorage.userId;
        return this.http.get(AppSettings.getUserOrdByVenId + "/" + venId, { headers: headers });
    }
    orderDetByVenId(ordId, venId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        // this.vendor_id = sessionStorage.userId;
        return this.http.get(AppSettings.orderDetByVenId + "/" + ordId + "/" + venId, { headers: headers });
    }
    getbannerById(banId, imgId) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        // this.vendor_id = sessionStorage.userId;
        return this.http.get(AppSettings.getbannerById + "/" + banId + "/" + imgId, { headers: headers });
    }
    updateBanner(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        // this.vendor_id = sessionStorage.userId;
        return this.http.put(AppSettings.updateBanner, params, { headers: headers });
    }
    insertAdminProd(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.insertAdminProd, params, { headers: headers })
    }
    getAdminProds(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.getAdminProds, params, { headers: headers })
    }
    forgotPassword(params) {
        const headers = new Headers({
            'Content-Type': "application/JSON",
            // 'x-access-token': (sessionStorage.token),
        });
        return this.http.post(AppSettings.forgotPw, params, { headers: headers });
    }
    otpVerify(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.otpUrl, params, { headers: headers });
    }
    changePwForgot(params) {
        const headers = new Headers({ 'Content-Type': "application/JSON" });
        return this.http.post(AppSettings.changeForgot, params, { headers: headers });
    }
    // deleteVendorbyId(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.delete(AppSettings.deleteVendorById + id, { headers: headers })
    // }
    // //offers
    // getOffers() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getOffersUrl, { headers: headers })
    // }
    // postOffersUrl(data) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.postOffersUrl, data, { headers: headers })
    // }
    // getOfferbyId(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.getOfferbyId + id, { headers: headers })
    // }
    // updateOfferById(id, params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.put(AppSettings.updateOfferById + id, params, { headers: headers })
    // }
    // deleteOfferById(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.delete(AppSettings.deleteOfferById + id, { headers: headers })
}
    //delivery
    // addDeliveryUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addDeliveryUrl, params, { headers: headers });
    // }
    // getOrders() {
    //     const headers = new Headers({
    //         'Content-Type': "application/JSON",
    //     });
    //     return this.http.get(AppSettings.getOrdersUrl, { headers: headers });
    // }
    // getDelivery() {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.getDeliveryUrl, { headers: headers });
    // }
    // getDeliverybyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getDeliveryById, params, { headers: headers });
    // }
    // updateDelivery(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateDeliveryUrl, params, { headers: headers });
    // }
    // deleteDelivery(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteDeliveryById, id, { headers: headers });
    // addLocation(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getCountriesUrl, params, { headers: headers });
    // }
    // getCountries() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCountriesUrl, { headers: headers })
    // }
    // getStatedUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getStatesUrl + '/' + id, { headers: headers })
    // }
    // getCityUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCityUrl + '/' + id, { headers: headers })
    // }
    // getAreaUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAreaUrl + '/' + id, { headers: headers })
    // }
    // addLocation(params) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.post(AppSettings.addLocation, params, { headers: headers })
    // }
    // getLocation() {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.get(AppSettings.getLocation, { headers: headers })
    // }
    // deleteLocation(id) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.delete(AppSettings.deleteLocation + "/" + id, { headers: headers })
    // }
    // // termsConditions(params) {
    // //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    // //     return this.http.post(AppSettings.getStatesbyId, params, { headers: headers })
    // // }
    // postBannerUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.postbannersUrl, params, { headers: headers })
    // }
    // getBannerUrl() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getBannerUrl, { headers: headers })
    // }
    // deleteBanner(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteBannerUrl, params, { headers: headers })
    // }
    // editBannerbyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.editBannerUrl, params, { headers: headers })
    // }
    // updateBannerbyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updatebannerUrl, params, { headers: headers })
    // }
    // getBannerPostion() {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.bannerPositionUrl, { headers: headers })
    // }
    // addCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addCityUrl, params, { headers: headers })
    // }
    // getCity() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCitiesUrl, { headers: headers })
    // }

    // getcitById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getCityByID, params, { headers: headers })
    // }

    // deleteCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteCitiesUrl, params, { headers: headers })
    // }
    // updateCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateCityUrl, params, { headers: headers })
    // }
    // addArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addAreaUrl, params, { headers: headers })
    // }
    // getArea() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAreasUrl, { headers: headers })
    // }

    // getareaById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getAreaById, params, { headers: headers })
    // }

    // deleteArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteAreaUrl, params, { headers: headers })
    // }
    // updateArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateAreaUrl, params, { headers: headers })
    // }
    // addWarehouse(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addwarehouseUrl, params, { headers: headers })
    // }
    // getwarehouse() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getwarehouseurl, { headers: headers })
    // }
    // updatewarehouse(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updatewarehouseUrl, params, { headers: headers })
    // }

    // getwarehouseById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getWarehouseById, params, { headers: headers })
    // }

    // deleteWareHoue(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteWarehouse, params, { headers: headers })
    // }
    // addSlot(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addslotUrl, params, { headers: headers })
    // }
    // getSlot() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getSlotUrl, { headers: headers })
    // }
    // deleteSlot(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteslotUrl, params, { headers: headers })
    // }
    // termsFooter(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.termsFooterUrl, params, { headers: headers })
    // }
    // getTerms() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getTermsUrl, { headers: headers })
    // }
    // getAboutUs() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAboutusUrl, { headers: headers })
    // }
    // getDeliveryInfo() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getDeliveryInfoUrl, { headers: headers })
    // }
    // getPrivacyPolicy() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getPrivacyUrl, { headers: headers })
    // }
    // updateTerms(params) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.post(AppSettings.updateTermsUrl, params, { headers: headers })
    // }
    // updateAboutUs(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updateAboutUsUrl, params, { headers: headers })
    // }
    // updateDeliveryInfo(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updateDeliveryInfoUrl, params, { headers: headers })
    // }
    // updateprivacy(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updatePrivacyUrl, params, { headers: headers })
    // }
    // postDealBannerUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.postDealbannersUrl, params, { headers: headers })
    // }
    // getDealBannerUrl() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getDealBannerUrl, { headers: headers })
    // }
    // deleteDealBanner(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.delete(AppSettings.deleteDealBannerUrl + '/' + id, { headers: headers })
    // }
    // updateDealBanner(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.put(AppSettings.updateDealbannerUrl + '/' + id, { headers: headers })
    // }
