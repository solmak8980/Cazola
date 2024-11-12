import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.mdule';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {saxChartBold} from '@ng-icons/iconsax/bold';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgIconsModule.withIcons({saxChartBold,}),
  ],
  providers: [],
  bootstrap: [AppComponent] // Component khởi động
})
export class AppModule { }
