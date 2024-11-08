import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    ]
  },
  { path: '**', redirectTo: 'auth/login' } 
];

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule
  ],
})
export class AuthModule { }
