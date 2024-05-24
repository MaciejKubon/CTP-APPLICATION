import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab2 } from '../models/databaseLab2';
import { Lab2Data, chartShow, formData } from '../models/interface';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css'],
})
export class Lab2Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any[] = [];
  dane: Lab2Data[] = [];
  X: number[] = [];
  Y: number[] = [];
  Y2: number[] = [];
  Y3: number[] = [];
  numer: number = 0;
  dataLength: number = 0;
  ileUsu: number = 0;
  isRun: boolean = false;
  RestartButton: boolean = false;
  StartButton: boolean = false;
  StopButton: boolean = true;
  buttonName: string[] = ['Start', 'Restart', 'Stop'];
  showChart: chartShow[] = [];
  chartSetting: formData[] = [];
  showDescription: boolean = false;
  ngOnInit(): void {
    this.showChart.push({ name: 'dist', show: true });
    this.showChart.push({ name: 'V', show: true });
    this.showChart.push({ name: 'A', show: true });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });

    this.dane = Lab2;
    this.dataLength = this.dane.length;
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
    this.chart.push(
      new Chart('canvas', {
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
                text: 'Odległość mm',
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
    this.chart.push(
      new Chart('canvas2', {
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
      })
    );
    this.chart.push(
      new Chart('canvas3', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Przyśpieszenie [m/s^2]',
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
              text: 'Wykres przyśpieszenia od czasu',
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
                text: 'Przyśpieszenia [m/s^2]',
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
    this.chart.forEach((element) => {
      element.options.animation = false;
    });
  }
  updateChart() {
    this.chart.forEach((element) => {
      element.update();
    });
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
    this.Y.push(this.dane[this.numer % this.dataLength].Y);
    this.Y2.push(this.dane[this.numer % this.dataLength].V);
    this.Y3.push(this.dane[this.numer % this.dataLength].A);
    this.X.push(this.label);

    if (this.X.length > this.dataLength) {
      this.USUN();
    }
    this.updateChart();
  };
  USUN = () => {
    this.Y3.shift();
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
    this.Y3.length = 0;
    this.X.push(0.0);
    this.Y.push(this.dane[0].Y);
    this.Y2.push(this.dane[0].V);
    this.Y3.push(this.dane[0].A);
    this.X.push(0.01);
    this.Y.push(this.dane[1].Y);
    this.Y2.push(this.dane[1].V);
    this.Y3.push(this.dane[1].A);
    this.updateChart();
    this.isRun = false;
    this.StopButton = false;
    this.RestartButton = true;
    this.StartButton = false;
  }
  onChange(event: any) {
    this.showChart.forEach((e, index) => {
      if (e.name == event.target.name) e.show = event.target.checked;
    });
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
