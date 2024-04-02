import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { LAB1_ai1 } from '../models/database';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css'],
})
export class Lab2Component implements OnInit {
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
            label: 'Napięcie [V]',
            data: this.Y,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Wykres napięcia od czasu',
            font: {
              size: 30,
            },
          },
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Czas [s]',
              font: {
                size: 20,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Napięcie [V]',
              font: {
                size: 20,
              },
            },
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
  USUN = () => {
    this.Y.shift();
    this.X.shift();
  };
  start() {
    this.inter = setInterval(this.Update, 10);
  }
  stop() {
    clearInterval(this.inter);
  }
}
