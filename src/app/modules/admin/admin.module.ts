import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RemovePlayerMsgComponent } from './components/remove-player-msg/remove-player-msg.component';


@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent,  AboutComponent, RemovePlayerMsgComponent],
  imports: [CommonModule, AdminRoutingModule, MatButtonModule, MatInputModule, MatTableModule, MatFormFieldModule, FormsModule],
})
export class AdminModule {}
