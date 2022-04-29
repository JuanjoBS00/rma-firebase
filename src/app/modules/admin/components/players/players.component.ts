import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { Player } from 'src/app/player-interface';
import { DatabaseService } from 'src/app/services/player-gestion/database.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  // CRUD Table Configuration
  @ViewChild(MatTable) table!: MatTable<Element>; 
  tableColumns: string[] = ['id','nombre', 'apellidos', 'posicion', 'goles', 'asistencias', 'edad', 'detalles', 'editar','eliminar']; 

  // Creation of a player and sets a variable which stores the id of the player chosen to be seen 
  player!: Player;
  idChosen = -1;

  playerlist : Player[] = [];

  constructor(private router: Router, private _playerDataBaseService: DatabaseService) { }
  

  ngOnInit(): void {

    let aux;
    let j = 0;
    //Get the players from database in order to avoid possible nulls and refreshing the table
    this.obtainPlayers().subscribe(players=>{
      if(players == null) return;
      aux = Object.values(players);

      if(aux.length == 1) {

        this.playerlist = aux;

      } else {

        for(var i = 0; i < aux.length; i++) {
          if(aux[i] != null) {
            this.playerlist[j]= aux[i];
            this.playerlist[j].id = i;
            j++;
          }
        }

      }
      this.table.renderRows();
    });
  }

  obtainPlayers(){
    return this._playerDataBaseService.obtainPlayers();
  }

  //Opens the playerDetailComponent
  watchPlayerDetails(idObtained: number){
    this.idChosen = idObtained;
  }

  //Closes the playerDetailComponent
  closeDetails(flag: string) {
    if(flag == "true") {
      this.idChosen = -1;
    }
  }


  createPlayer(){
    this.router.navigate(['/admin/create-player']);
  }


  updatePlayer(idObtained: number){
    this.router.navigate(['/admin/modify-player', idObtained]);
  }


  removePlayer(idObtained: number) {
    for(var i = 0; i < this.playerlist.length; i++) {
      if(this.playerlist[i].id == idObtained) {
        this.player = this.playerlist[i];
      }
    }

    this._playerDataBaseService.deletePlayer(this.player, '/admin/remove-player-msg');

  }

 

}
