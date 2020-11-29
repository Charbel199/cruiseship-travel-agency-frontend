import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.css']
})
export class ShipInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
    for(var i=1; i<25; i++){
      this.updateReserved(i);
      this.removeReserved(i);

    }
    this.updateReserved(69);
  }

  updateReserved(id): void{
    var room = document.getElementById("R" + id);
    room.classList.add("reserved");
  }

  removeReserved(id): void{
    var room = document.getElementById("R" + id);
    room.classList.remove("reserved");
  }

}
