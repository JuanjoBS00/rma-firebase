import { Component, OnInit, Input, Output,  EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player-interface';
import { DatabaseService } from 'src/app/services/player-gestion/database.service';



@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input() id = -1; 
  @Output() flag = new EventEmitter<string>(); 

  player: Player = {id: -1, nombre: "", apellidos:"", posicion: "", goles: 0, asistencias: 0, edad: 0};
  playerList: Player[] = [];

  constructor(private actRoute: ActivatedRoute, private _playerDatabaseService: DatabaseService) { }

  ngOnInit(): void {
    let aux;
    let j = 0;
    
    this._playerDatabaseService.obtainPlayers().subscribe(movies=>{
      if(movies == null) return;
      aux = Object.values(movies);

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

  closeOrder() {
    this.flag.emit("true");
  }

}
