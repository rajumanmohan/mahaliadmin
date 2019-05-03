import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email;
    password;
    role;
    RouterUrl;
    constructor(private appService: AppService, public router: Router, private formBuilder: FormBuilder) {
        this.role = "Admin";
    }

    ngOnInit() {
        this.RouterUrl = (this.router.url);
    }
    roleChange(role) {
        this.role = role;

    }

    adminLogin() {
        var data = {
            "email": this.email,
            "password": this.password,
            "role": this.role || 'wholesaler'
        }
        if (this.role === "Staff") {
            // alert(this.role)
            this.appService.staffLogin(data).subscribe(resp => {
                if (resp.json().status === 200) {
                    swal(resp.json().message, '', 'success');
                    sessionStorage.setItem("role", resp.json().role);
                    sessionStorage.setItem("profile", JSON.stringify(resp.json().row));
                    this.router.navigate(['/dashBoard']);
                }
                else if (resp.json().status === 400) {
                    swal(resp.json().message, '', 'error');
                    this.router.navigate(['/'])
                }
            })
        } else {
            this.appService.adminlogin(data).subscribe(resp => {
                if (resp.json().status === 200) {
                    swal(resp.json().message, '', 'success');
                    sessionStorage.setItem("role", resp.json().role);
                    sessionStorage.setItem("profile", JSON.stringify(resp.json().row));
                    this.router.navigate(['/dashBoard']);
                    if (resp.json().role === "wholesaler") {
                        sessionStorage.setItem("wholesalerId", resp.json().id);
                    }
                }
                else if (resp.json().status === 400) {
                    swal(resp.json().message, '', 'error');
                    this.router.navigate(['/'])
                }
            })
        }

    }


}
