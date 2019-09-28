import { Component, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-EN' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ContactFormComponent implements OnInit {

  contact = {};

  constructor(
    private router: Router,
    private informationService: InformationService,
  ) { }

  ngOnInit() {
  }

  createContact() {
    this.informationService.addContact(this.contact).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

}
