import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player-interface';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/player-gestion/database.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.scss']
})
export class ModifyPlayerComponent implements OnInit {

  public id!: number;
  player!: Player;
  playerList: Player[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private _playerDatabaseService: DatabaseService) { }
    

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']; //Gets the id from route
    let aux;
    let j = 0;
    //Get the players from database avoiding the possible nulls and refreshing the table
    this._playerDatabaseService.obtainPlayers().subscribe(players=>{
      if(players == null) return;
      aux=Object.values(players);

      if(aux.length == 1) {
        this.playerList = aux;
      } else {

        for(var i = 0; i < aux.length; i++) {
          if(aux[i] != null) {
            this.playerList[j]= aux[i];
            this.playerList[j].id = i;
            j++;
          }
        }
      }

      for(var i = 0; i < this.playerList.length; i++) {
        if(this.playerList[i].id == this.id) {
          this.player = this.playerList[i];
        }
      }
    });
      
  }

  modifyPlayer() {
    this._playerDatabaseService.updatePlayer(this.player, '/admin/players');
  }

}
