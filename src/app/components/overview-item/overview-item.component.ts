import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent implements OnInit {

  contact = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private informationService: InformationService,
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.informationService.getContactById(Number(id)).subscribe(res => {
      this.contact = res;
    });
  }

  ngOnInit() {
  }

  openOverview() {
    this.router.navigate(['/overview']);
  }

}
