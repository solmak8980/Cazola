import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    ]
  },
  { path: '**', redirectTo: 'admin' } 
];

@NgModule({
  declarations: [AdminLayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes) 
  ]
})
export class AdminModule { }
