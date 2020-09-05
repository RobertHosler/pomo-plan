import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css'],
})
export class PomodoroComponent implements OnInit {
  time: string;
  pRunning: boolean = false;

  // pMin: number = .1;//For testing overtime
  pMin: number = 25;
  pSec: number = this.pMin * 60;
  pSecCountdown: number;

  constructor() {}

  ngOnInit(): void {}

  onGo() {
    this.pRunning = true;
    this.pSecCountdown = this.pSec;
    this.updateTime();
    this.countdown();
    // do {
    //   setTimeout(function() {
    //     this.time = (this.pSecCountdown % 60) + '';
    //     this.pSecCountdown = this.pSecCountdown - 1;
    //   }, 1000);
    // } while ( this.pSecCountdown > 0 )
  }

  countdown() {
    setTimeout(() => {
      if (this.pRunning) {
        this.pSecCountdown = this.pSecCountdown - 1;
        this.updateTime();
        this.countdown();
      }
    }, 1000);
  }

  //Add red background when over time - DONE
  //Add Negative in front of 0 when over time - DONE

  //Count overtime/pomo time - manage in 'total' bucket
  //Prevent multiple timers at once - setTimeout to local variable?

  //Take a break feature
  

  updateTime() {
    var min = this.pSecCountdown > 0 ? Math.floor(this.pSecCountdown / 60) : Math.ceil(this.pSecCountdown / 60);
    var sec = this.pSecCountdown > 0 ? this.pSecCountdown % 60 : (this.pSecCountdown % 60 * -1);
    var minString;
    if (min === 0 && this.pSecCountdown < 0) {
      minString = "-" + min;
    } else {
      minString = min;
    }
    var secString;
    if (sec < 10) {
      secString = '0' + sec;
    } else {
      secString = sec;
    }
    this.time = minString + ':' + secString;
  }

  onStop() {
    this.pRunning = false;
  }
}
