import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './dukaan/home/home.component';
import { CategoriesComponent } from './dukaan/categories/categories.component';
import { PartnerComponent } from './dukaan/partner/partner.component';
const routes: Routes =[
  {
    path: '',redirectTo: 'dashboard',  pathMatch: 'full',
  },  
  { 
   path: '', component: AdminLayoutComponent, 
   children: [{ path: '',loadChildren:'./layouts/admin-layout/admin-layout.module#AdminLayoutModule' }]
  },
  {
    path: 'home',component: HomeComponent
  }, 
  {
  path: 'categories/:id',component: CategoriesComponent
  },
{
path: 'partner',component: PartnerComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
