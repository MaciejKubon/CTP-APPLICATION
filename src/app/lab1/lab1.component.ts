import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { LAB1_ai1 } from '../models/database';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit {
  inter: any;
  label: number = 0.0;
  chart: any = [];
  dane: { x: number; y: number }[] = [];
  X: number[] = [];
  Y: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  ngOnInit(): void {
    this.dane = LAB1_ai1;
    this.dataLength = this.dane.length + 1;
    this.X.push(this.label);
    this.Y.push(this.dane[0].y);
    this.X.push(this.label);
    this.Y.push(this.dane[0].y);
    this.numer = 2;
    this.ileUsu = this.dataLength;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.X,
        datasets: [
          {
            label: '# of Votes',
            data: this.Y,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
    this.chart.options.animation = false;
    this.inter = setInterval(this.Update, 10);
  }

  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.01) * 100) / 100;
    this.Y.push(this.dane[this.numer % this.dataLength].y);
    this.X.push(this.label);

    if (this.X.length > this.dataLength) {
      this.USUN();
    }
    this.chart.update();
  };
  USUN() {
    this.Y.shift();
    this.X.shift();
  }
  START() {
    this.inter = setInterval(this.Update, 10);
  }
  STOP() {
    clearInterval(this.inter);
  }
}
