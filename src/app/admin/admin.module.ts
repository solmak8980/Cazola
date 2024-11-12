import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { NgIconsModule } from '@ng-icons/core';
import { saxChartBold, saxLogin1Bold } from '@ng-icons/iconsax/bold';
import { ToastComponent } from '../components/toast/toast.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'admin' },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    CommonModule,
    NgIconsModule.withIcons({ saxChartBold,saxLogin1Bold }),
  ],
})
export class AdminModule {}
