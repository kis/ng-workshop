import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  contacts = [];

  constructor(
    private router: Router,
    private informationService: InformationService,
  ) {
    this.informationService.getContacts().subscribe(res => {
      this.contacts = res.data;
    });
  }

  ngOnInit() {
  }

  openContactForm() {
    this.router.navigate(['/contact-form']);
  }

  openContact(id: number) {
    this.router.navigate([`/overview/${id}`]);
  }

}
