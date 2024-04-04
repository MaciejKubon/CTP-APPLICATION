import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Lab3 } from '../models/databaseLab3';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css'],
})
export class Lab3Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any = [];
  chart2: any = [];
  dane: { X: number; Y: number; V: number }[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  ngOnInit(): void {
    this.dane = Lab3;
    this.dataLength = this.dane.length + 1;
    this.X.push(this.label);
    this.Y.push(this.dane[0].Y);
    this.Y2.push(this.dane[0].V);
    this.X.push(this.label);
    this.Y.push(this.dane[1].Y);
    this.Y2.push(this.dane[1].V);
    this.numer = 2;
    this.ileUsu = this.dataLength;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.X,
        datasets: [
          {
            label: 'Odległość [mm]',
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
            text: 'Wykres odległości od czasu',
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
              text: 'Predkość [m/s]',
              font: {
                size: 20,
              },
            },
            beginAtZero: false,
          },
        },
      },
    });
    this.chart2 = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: this.X,
        datasets: [
          {
            label: 'Prędkość [mm/s]',
            data: this.Y2,
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
            text: 'Wykres prędkości od czasu',
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
              text: 'Prędkość [m/s]',
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
    this.chart2.options.animation = false;
    //this.inter = setInterval(this.Update, 10);
  }
  ngOnDestroy(): void {
    this.chart = [];
    this.dane = [];
    clearInterval(this.inter);
  }
  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.01) * 100) / 100;
    this.Y.push(this.dane[this.numer % this.dataLength].Y);
    this.Y2.push(this.dane[this.numer % this.dataLength].V);
    this.X.push(this.label);

    if (this.X.length > this.dataLength) {
      this.USUN();
    }
    this.chart.update();
    this.chart2.update();
  };
  USUN = () => {
    this.Y2.shift();
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
