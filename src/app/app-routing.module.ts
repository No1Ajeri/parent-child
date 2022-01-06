import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { TaiwoComponent } from './child/taiwo/taiwo.component';
import { KehindeComponent } from './child/kehinde/kehinde.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashbaord', pathMatch:'full'},
  {
    path: 'dashbaord', component: DashboardComponent,
    children: [
      {path: 'taiwo', component: TaiwoComponent},
      {path: 'kehinde', component: KehindeComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
