import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { JSONTableModule } from 'angular-json-table';
//import {CustExtBrowserXhr} from './cust-ext-browser-xhr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    JSONTableModule
  ],
  providers: [   
//    {provide: BrowserXhr, useClass:CustExtBrowserXhr},
//    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
