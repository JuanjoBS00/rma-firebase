import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-player-msg',
  templateUrl: './remove-player-msg.component.html',
  styleUrls: ['./remove-player-msg.component.scss']
})
export class RemovePlayerMsgComponent implements OnInit {

  removeText = "Contrato del jugador rescindido correctamente";

  constructor() { }

  ngOnInit(): void {
  }

}
