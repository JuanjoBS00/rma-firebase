import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlayersComponent } from './components/players/players.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { ModifyPlayerComponent } from './components/modify-player/modify-player.component';
import { RemovePlayerMsgComponent } from './components/remove-player-msg/remove-player-msg.component';



const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'create-player', component: CreatePlayerComponent},
      { path: 'modify-player/:id', component: ModifyPlayerComponent},
      { path: 'remove-player-msg', component: RemovePlayerMsgComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
