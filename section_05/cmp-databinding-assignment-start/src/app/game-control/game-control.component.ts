import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tick = new EventEmitter<number>();
  started: boolean = false;
  ref: number = 0;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void{
    if (this.started) {
      return;
    }

    this.started = true;
    this.ref = window.setInterval(() => {
      this.counter++;
      this.tick.emit(this.counter);
    }, 1000);
  }

  onStopGame (){
    if (!this.started) {
      return;
    }

    window.clearInterval(this.ref);
    this.started = false;
    this.counter = 0;
  }
}
