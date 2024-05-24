import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab1 } from '../models/databaseLab1';
import { RunButtonComponent } from '../run-button/run-button.component';
import { Lab1Data, chartShow, formData } from '../models/interface';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any[] = [];
  dane: Lab1Data[] = [];
  chartData: Lab1Data[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  minLabel: number = 0;
  maxLabel: number = 0;
  isRun: boolean = false;
  RestartButton: boolean = false;
  StartButton: boolean = false;
  StopButton: boolean = true;
  buttonName: string[] = ['Start', 'Restart', 'Stop'];
  showChart: chartShow[] = [];
  chartSetting: formData[] = [];
  showDescription: boolean = false;
  ngOnInit(): void {
    this.showChart.push({ name: 'ai1', show: true });
    this.showChart.push({ name: 'ai2', show: true });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
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

    this.chart.push(
      new Chart('canvas', {
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
              text: 'Napięcie',
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
      })
    );
    this.chart[0].options.animation = false;
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
    this.chart[0].update();
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
      this.StopButton = false;
      this.RestartButton = false;
      this.StartButton = true;
    }
  }
  stop() {
    if (this.isRun) {
      clearInterval(this.inter);
      this.isRun = false;
      this.StopButton = true;
      this.RestartButton = false;
      this.StartButton = false;
    }
  }
  restart() {
    clearInterval(this.inter);
    this.label = 0;
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
    this.chart[0].update();
    this.isRun = false;
    this.StopButton = false;
    this.RestartButton = true;
    this.StartButton = false;
  }
  onChange(event: any) {
    this.showChart.forEach((e, index) => {
      if (e.name == event.target.name)
        this.chart[0].data.datasets[index].hidden = !event.target.checked;
    });
    this.chart[0].update();
  }
  changeDescription(show: boolean) {
    this.showDescription = show;
  }
  saveFormData(FormValue: any, chartNumber: number) {
    this.chartSetting[chartNumber] = {
      yStart: FormValue.yStart,
      yStop: FormValue.yStop,
      xLength: FormValue.xLength,
    };

    this.chart[chartNumber].options.scales.y.max =
      this.chartSetting[chartNumber].yStop;
    this.chart[chartNumber].options.scales.y.min =
      this.chartSetting[chartNumber].yStart;
    this.chart[chartNumber].update();
  }
}
