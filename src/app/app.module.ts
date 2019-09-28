import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { X2Pipe } from './pipes/x2.pipe';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewItemComponent } from './components/overview-item/overview-item.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InformationService } from './services/information.service';

@NgModule({
  declarations: [
    AppComponent,
    FactorialPipe,
    X2Pipe,
    OverviewComponent,
    OverviewItemComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
