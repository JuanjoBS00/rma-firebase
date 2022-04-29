import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/player-interface';
import { DatabaseService } from 'src/app/services/player-gestion/database.service';


@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  player: Player = {id: -1, nombre: "", apellidos:"", posicion: "", goles: 0, asistencias: 0, edad: 0};
  playerList: Player[] = [];

  constructor(private _playerDatabaseService: DatabaseService) { }

  ngOnInit(): void {

    let aux;
    let j = 0;
    //Get the players from database avoiding the possible nulls and refreshing the table
    this._playerDatabaseService.obtainPlayers().subscribe(players=>{
      if(players == null) return;
      aux = Object.values(players);

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
    });

  }


  // Calculates the new player id and saves it in the database
  addPlayer() {
    var idChosen = -1;

    if(this.playerList != null) {
      for(var i = 0; i < this.playerList.length; i++) {
        if(this.playerList[i] == null) {
          continue;
        }else if(this.playerList[i].id > idChosen) {
            idChosen = this.playerList[i].id;
        }
      }
    }

    idChosen++;
    this.player.id = idChosen;
    let newPlayer = new Player(this.player.id, this.player.nombre, this.player.apellidos, this.player.posicion, this.player.goles, this.player.asistencias, this.player.edad);
    this.playerList.push(newPlayer);
    this._playerDatabaseService.savePlayers(this.playerList, '/admin/players');
  }

}
