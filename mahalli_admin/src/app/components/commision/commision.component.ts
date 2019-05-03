import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-commision',
  templateUrl: './commision.component.html',
  styleUrls: ['./commision.component.css']
})
export class CommisionComponent implements OnInit {
  page;
  commisionData = [];
  title;
  p: number = 1;
  type;
  constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) {
    this.page = this.route.snapshot.data[0].page;
    if (this.page === "wholeCommision") {
      this.wholecomission();
      this.title = "Wholeseler";
      this.type = 'whole';
    } else {
      this.vendorcomission();
      this.title = "Vendor";
      this.type = 'vendor';


    }
  }

  ngOnInit() {
    this.wholecomission();
  }
  wholecomission() {
    this.appService.getWholeCommision().subscribe(res => {
      this.commisionData = res.json().data;
    })
  }
  vendorcomission() {
    this.appService.getVendorCommision().subscribe(res => {
      this.commisionData = res.json().data;
    })
  }
  showOrdersByWhole(wholeId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: this.type,
        id: wholeId
      }
    }
    if (this.type === 'whole') {
      this.router.navigate(['vendrorders'], navigationExtras)
    } else {
      this.router.navigate(['userorders'], navigationExtras)

    }

  }

}
