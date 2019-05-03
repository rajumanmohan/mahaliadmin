import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router } from '@angular/router';

declare var jQuery: any;
declare var $: any;
@Component({
    selector: 'forgot-password',
    templateUrl: './forgot.password.html',
    styleUrls: ['./login.component.css']

})
export class ForgotPasswordComponent implements OnInit {
    forgotForm: FormGroup;
    changePassForm: FormGroup;
    forgotSubmitted = false;
    optScreen = false;
    forgotScreen = true;
    changePass = false;
    changePwSubmitted = false;

    constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) { }

    ngOnInit() {
        this.forgotForm = this.formBuilder.group({
            mob_number: ['', [Validators.required]],
        });
        this.changePassForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f2() { return this.forgotForm.controls; }
    forgot() {
        this.forgotSubmitted = true;
        if (this.forgotForm.invalid) {
            return;
        }
        var inData = {
            mobile_number: this.forgotForm.value.mob_number
        }
        this.appService.forgotPassword(inData).subscribe(resp => {
            if (resp.json().status === 200) {
                // jQuery("#forgotpass").modal("hide");
                swal(resp.json().message, "", "success");
                this.optScreen = true;
                this.forgotScreen = false;
                this.changePass = false;
                // jQuery("#otpScreen").modal("show");
                sessionStorage.setItem('mobile_number', (this.forgotForm.value.mob_number));
            } else {
                swal(resp.json().message, "", "error");
                this.optScreen = false;

            }


        }, err => {
            swal(err.json().message, "", "error");
        })
    }
    otpNumber;
    otpScreen() {
        var data = {
            'otp': this.otpNumber,
            'mobile_number': sessionStorage.mobile_number
        }
        this.appService.otpVerify(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, "", "success");
                this.optScreen = false;
                this.forgotScreen = false;
                this.changePass = true;
                // jQuery("#otpScreen").modal("hide");
                // $('body').removeClass('modal-open');
                // $('.modal-backdrop').remove();
                // jQuery("#changepwd").modal("show");

            } else {
                swal(resp.json().message, "", "error");
            }
        })
        // jQuery("#otpScreen").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();
        // jQuery("#changepwd").modal("show");

    }
    get f4() { return this.changePassForm.controls; }
    ChangePw() {
        this.changePwSubmitted = true;

        if (this.changePassForm.invalid) {
            return;
        }
        this.changePassForm.value.mobile_number = sessionStorage.mobile_number;
        this.appService.changePwForgot(this.changePassForm.value).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, "", "success");
                this.router.navigate(['/'])
            } else {
                swal(resp.json().message, "", "error");
            }
        }, err => {

        })
    }
}
