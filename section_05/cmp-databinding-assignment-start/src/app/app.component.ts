import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] =[0];
  oddNumbers: number[] =[];


  onTick($event) {
    if ($event % 2 === 0) {
      this.evenNumbers.push($event);
    } else {
      this.oddNumbers.push($event);
    }
  }
}
