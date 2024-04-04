import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab2 } from '../models/databaseLab2';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css'],
})
export class Lab2Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any = [];
  dane: { X: number; Y: number; V: number; A: number }[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  Y3: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  minLabel: number = 0;
  maxLanel: number = 0;
  ngOnInit(): void {
    this.dane = Lab2;
    this.dataLength = this.dane.length + 1;
    this.X.push(this.label);
    this.Y.push(this.dane[0].Y);
    this.Y2.push(this.dane[0].V);
    this.Y3.push(this.dane[0].A);
    this.X.push(this.label);
    this.Y.push(this.dane[1].Y);
    this.Y2.push(this.dane[1].V);
    this.Y3.push(this.dane[1].A);
    this.numer = 2;
    this.ileUsu = this.dataLength;
    this.minLabel = -2000;
    this.maxLanel = 2000;
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
          {
            label: 'Prędkość [mm/s]',
            data: this.Y2,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
          {
            label: 'Przyśpieszenie [cm/s]',
            data: this.Y3,
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
              text: 'OdległoścS [mm]',
              font: {
                size: 20,
              },
            },
            min: this.minLabel,
            max: this.maxLanel,
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
  }
  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.01) * 100) / 100;
    this.Y.push(this.dane[this.numer % this.dataLength].Y);
    this.Y2.push(this.dane[this.numer % this.dataLength].V * 1000);
    this.Y3.push(this.dane[this.numer % this.dataLength].A * 100);
    this.X.push(this.label);

    if (this.X.length > this.dataLength) {
      this.USUN();
    }
    this.chart.update();
  };
  USUN = () => {
    this.Y3.shift();
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
