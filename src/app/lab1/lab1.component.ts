import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab1 } from '../models/databaseLab1';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any = [];
  dane: { x: number; ai1: number; ai2: number }[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  minLabel: number = 0;
  maxLabel: number = 0;
  isRun: boolean = false;
  ngOnInit(): void {
    this.dane = Lab1;
    this.dataLength = this.dane.length;
    this.X.push(this.label);
    this.Y.push(this.dane[0].ai1);
    this.Y2.push(this.dane[0].ai2);
    this.X.push(this.label);
    this.Y.push(this.dane[1].ai1);
    this.Y2.push(this.dane[1].ai2);
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
    //this.inter = setInterval(this.Update, 10);
  }
  ngOnDestroy(): void {
    this.chart = [];
    this.dane = [];
    clearInterval(this.inter);
    this.isRun = false;
  }
  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.01) * 100) / 100;
    this.Y.push(this.dane[this.numer % this.dataLength].ai1);
    this.Y2.push(this.dane[this.numer % this.dataLength].ai2);
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
    if (!this.isRun) {
      this.inter = setInterval(this.Update, 10);
      this.isRun = true;
    }
  }
  stop() {
    if (this.isRun) {
      clearInterval(this.inter);
      this.isRun = false;
    }
  }
  restart() {
    clearInterval(this.inter);
    this.numer = 2;
    this.X.length = 0;
    this.Y.length = 0;
    this.Y2.length = 0;
    this.X.push(0.0);
    this.Y.push(this.dane[0].ai1);
    this.Y2.push(this.dane[0].ai2);
    this.X.push(0.01);
    this.Y.push(this.dane[1].ai1);
    this.Y2.push(this.dane[1].ai2);
    this.chart.update();
    this.isRun = false;
  }
}
