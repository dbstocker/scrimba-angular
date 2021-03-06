import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
// import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
