import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Player } from "src/app/player-interface";


@Injectable()
export class DatabaseService {

  databaseLink = "https://realmadriddatabase-default-rtdb.europe-west1.firebasedatabase.app/data.json";

  altDatabaseLink = "https://realmadriddatabase-default-rtdb.europe-west1.firebasedatabase.app/data/";


  constructor(private router: Router, private httpClient: HttpClient) { }

  // Saves players in the Database. Uses PUT in order to avoid duplicates
  savePlayers(players:Player[], route: string){
    this.httpClient.put(this.databaseLink, players).subscribe({
      next: (v) => this.router.navigate([route]),
      error: (e) => console.log('Error' + e),
    });
  }

  // Obtains players from the Database
  obtainPlayers(){
    return this.httpClient.get(this.databaseLink);
  }

  //UPDATE players in the Database
  updatePlayer(player: Player, route: string){
    let databaseLinkFinal =  this.altDatabaseLink  + player.id + ".json";
    this.httpClient.put(databaseLinkFinal, player).subscribe({
      next: (v) => this.router.navigate([route]),
      error: (e) => console.log('Error' + e),
    });
  }

  //DELETE players in the database
  deletePlayer(player: Player, route: string){

    let playerList;
    let databaseLinkFinal;

  //Players are obtained to avoid a bug deleting all if only one remains or one specifically if more than one remains
    this.obtainPlayers().subscribe(players=>{
      if(players == null) return;
      playerList=Object.values(players);

      if(playerList.length == 1) {
        databaseLinkFinal = this.databaseLink; //Forces the deletion of all players if only one exists in the list(avoids a id bug)
      } else {
        databaseLinkFinal = this.altDatabaseLink + player.id + ".json"; // Link of the player deleted
      }

      this.httpClient.delete(databaseLinkFinal).subscribe({
        next: (v) => this.router.navigate([route]),
        error: (e) => console.log('Error' + e),
      });

    });
  }

}
