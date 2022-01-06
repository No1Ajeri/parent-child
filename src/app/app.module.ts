import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { TaiwoComponent } from './child/taiwo/taiwo.component';
import { KehindeComponent } from './child/kehinde/kehinde.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaiwoComponent,
    KehindeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
