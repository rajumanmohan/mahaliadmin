import { AppService } from './../../services/mahali/mahali-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-wholesellers',
    templateUrl: './wholesellers.component.html',
    styleUrls: ['./wholesellers.component.css']
})
export class WholesellersComponent implements OnInit {
    wholeSellers = [];
    p: number = 1;
    wholeId;
    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute, ) {
        this.route.queryParams.subscribe(params => {
            this.wholeId = params.salerproductId;
        });
    }

    ngOnInit() {
        this.getWholeSeller();
    }
    getWholeSeller() {
        this.appService.getWholeSeller().subscribe(resp => {
            this.wholeSellers = resp.json().data;
        })
    }
    edit(Id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'sellerId': Id
            }
        }
        this.router.navigate(['/addwholesellers'], navigationExtras);
    }
    delete(id) {
        var data = {
            "id": id
        }
        this.appService.deleteWholeSeller(data).subscribe(resp => {
            if (resp.json().status === 200) {
                swal(resp.json().message, '', 'success');
                this.getWholeSeller();
            } else if (resp.json().status === 400) {
                swal(resp.json().message, '', 'error');
            }
        })
    }
    product(Id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'salerproductId': Id
            }
        }
        this.router.navigate(['/salerproducts'], navigationExtras);
    }
}
