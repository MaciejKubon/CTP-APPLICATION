import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { LAB1_ai1, LAB1_ai2 } from '../models/database';

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
  dane2: { x: number; y: number }[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  minLabel: number = 0;
  maxLabel: number = 0;
  ngOnInit(): void {
    this.dane = LAB1_ai1;
    this.dane2 = LAB1_ai2;
    this.dataLength = this.dane.length + 1;
    this.X.push(this.label);
    this.Y.push(this.dane[0].y);
    this.Y.push(this.dane2[0].y);
    this.X.push(this.label);
    this.Y.push(this.dane[1].y);
    this.Y.push(this.dane2[1].y);
    this.numer = 2;
    this.ileUsu = this.dataLength;
    this.minLabel = 0;
    this.maxLabel = 8;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.X,
        datasets: [
          {
            label: 'Napięcie [V] ai1',
            data: this.Y,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
          {
            label: 'Napięcie [V] ai2',
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
            min: this.minLabel,
            max: this.maxLabel,
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
    this.Y2.push(this.dane2[this.numer % this.dataLength].y);
    this.X.push(this.label);

    if (this.X.length > this.dataLength) {
      this.USUN();
    }
    this.chart.update();
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
