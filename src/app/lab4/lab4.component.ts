import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab4 } from '../models/databaseLab4';
import { Lab4Data, chartShow, formData } from '../models/interface';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css'],
})
export class Lab4Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart: any[] = [];
  numer: number = 0;
  dataLength: number = 0;
  dane: Lab4Data[] = [];
  X: number[] = [];
  V0: number[] = [];
  V1: number[] = [];
  V2: number[] = [];
  V3: number[] = [];
  nV1: number[] = [];
  nV2: number[] = [];
  nV3: number[] = [];
  RestartButton: boolean = false;
  StartButton: boolean = false;
  StopButton: boolean = true;
  ileUsu: number = 0;
  isRun: boolean = false;
  buttonName: string[] = ['Start', 'Restart', 'Stop'];
  showChart: chartShow[] = [];
  chartSetting: formData[] = [];
  showCheckboxChart: boolean = false;
  showDescription: boolean = false;

  ngOnInit(): void {
    this.showChart.push({ name: 'V0P', show: false });
    this.showChart.push({ name: 'V1P', show: false });
    this.showChart.push({ name: 'V2P', show: false });
    this.showChart.push({ name: 'V3P', show: false });
    this.showChart.push({ name: 'nV1P', show: false });
    this.showChart.push({ name: 'nV2P', show: false });
    this.showChart.push({ name: 'nV3P', show: false });

    this.showChart.push({ name: 'V0W', show: true });
    this.showChart.push({ name: 'V1W', show: true });
    this.showChart.push({ name: 'V2W', show: true });
    this.showChart.push({ name: 'V3W', show: true });
    this.showChart.push({ name: 'nV1W', show: true });
    this.showChart.push({ name: 'nV2W', show: true });
    this.showChart.push({ name: 'nV3W', show: true });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: -5, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: -5, yStop: 10, xLength: 10 });

    this.dane = Lab4;
    this.dataLength = this.dane.length;
    this.X.push(this.label);
    this.V0.push(this.dane[0].V0);
    this.V1.push(this.dane[0].V1);
    this.V2.push(this.dane[0].V2);
    this.V3.push(this.dane[0]['"-V3"']);
    this.X.push(this.label + 0.005);
    this.V0.push(this.dane[1].V0);
    this.V1.push(this.dane[1].V1);
    this.V2.push(this.dane[1].V2);
    this.V3.push(this.dane[1]['"-V3"']);
    this.nV1.push(this.dane[0]['n(t) dla V1']);
    this.nV1.push(this.dane[1]['n(t) dla V1']);
    this.nV2.push(this.dane[0]['n(t) dla V2']);
    this.nV2.push(this.dane[1]['n(t) dla V2']);
    this.nV3.push(this.dane[0]['n(t) dla V3']);
    this.nV3.push(this.dane[1]['n(t) dla V3']);
    this.numer = 2;

    this.chart.push(
      new Chart('canvas0', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Odległość [mm]',
              data: this.V0,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,0,1)',
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
                text: 'V0 [m/s]',
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
      new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Prędkość [mm/s]',
              data: this.V1,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,255,1)',
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Wykres prędkości od czsasu',
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
                text: 'V1 [m/s]',
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
              label: 'Odległość [mm]',
              data: this.V2,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(255,0,0,1)',
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
                text: 'V2 [m/s]',
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
              label: 'Odległość [mm]',
              data: this.V3,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(255,0,255,1)',
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
                text: 'V3 [m/s]',
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
      new Chart('canvas4', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Odległość [mm]',
              data: this.nV1,
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
                text: 'n(t) dla V1 [m/s]',
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
      new Chart('canvas5', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Odległość [mm]',
              data: this.nV2,
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
                text: 'n(t) dla V2 [m/s]',
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
      new Chart('canvas6', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Odległość [mm]',
              data: this.nV3,
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
                text: 'n(t) dla V3 [m/s]',
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
      new Chart('canvas7', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'V0 [mm]',
              data: this.V0,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,0,1)',
            },
            {
              label: 'V1 [mm]',
              data: this.V1,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,255,1)',
            },
            {
              label: 'V2 [mm]',
              data: this.V2,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(255,0,0,1)',
            },
            {
              label: 'V3 [mm]',
              data: this.V3,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(255,0,255,1)',
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
      })
    );
    this.chart.push(
      new Chart('canvas8', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'n(t) dla V1 [mm]',
              data: this.nV1,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
            },
            {
              label: 'n(t) dla V2 [mm]',
              data: this.nV2,
              borderWidth: 1,
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
            },
            {
              label: 'n(t) dla V3 [mm]',
              data: this.nV3,
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
    this.chart.forEach((element) => {
      element.update();
    });
    this.dane = [];
    clearInterval(this.inter);
    this.isRun = false;
  }
  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.005) * 1000) / 1000;
    this.X.push(this.label);
    this.V0.push(this.dane[this.numer % this.dataLength].V0);
    this.V1.push(this.dane[this.numer % this.dataLength].V1);
    this.V2.push(this.dane[this.numer % this.dataLength].V2);
    this.V3.push(this.dane[this.numer % this.dataLength]['"-V3"']);
    this.nV1.push(this.dane[this.numer % this.dataLength]['n(t) dla V1']);
    this.nV2.push(this.dane[this.numer % this.dataLength]['n(t) dla V2']);
    this.nV3.push(this.dane[this.numer % this.dataLength]['n(t) dla V3']);
    if (this.X.length > this.dataLength / 50) {
      this.USUN();
    }

    this.updateChart();
  };
  USUN = () => {
    this.nV3.shift();
    this.nV2.shift();
    this.nV1.shift();
    this.V3.shift();
    this.V2.shift();
    this.V1.shift();
    this.V0.shift();
    this.X.shift();
  };
  start() {
    if (!this.isRun) {
      this.inter = setInterval(this.Update, 5);
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
    this.V0.length = 0;
    this.X.push(0.0);
    this.V0.push(this.dane[0].V0);
    this.V1.push(this.dane[0].V1);
    this.V2.push(this.dane[0].V2);
    this.V3.push(this.dane[0]['"-V3"']);
    this.X.push(0.005);
    this.V0.push(this.dane[1].V0);
    this.V1.push(this.dane[1].V1);
    this.V2.push(this.dane[1].V2);
    this.V3.push(this.dane[1]['"-V3"']);
    this.nV1.push(this.dane[0]['n(t) dla V1']);
    this.nV1.push(this.dane[1]['n(t) dla V1']);
    this.nV1.push(this.dane[0]['n(t) dla V2']);
    this.nV1.push(this.dane[1]['n(t) dla V2']);
    this.nV1.push(this.dane[0]['n(t) dla V3']);
    this.nV1.push(this.dane[1]['n(t) dla V3']);
    this.updateChart();
    this.isRun = false;
    this.StopButton = false;
    this.RestartButton = true;
    this.StartButton = false;
  }
  onChange(event: any) {
    switch (event.target.name) {
      case 'V0P':
        this.showChart[0].show = event.target.checked;
        break;
      case 'V1P':
        this.showChart[1].show = event.target.checked;
        break;
      case 'V2P':
        this.showChart[2].show = event.target.checked;
        break;
      case 'V3P':
        this.showChart[3].show = event.target.checked;
        break;
      case 'nV1P':
        this.showChart[4].show = event.target.checked;
        break;
      case 'nV2P':
        this.showChart[5].show = event.target.checked;
        break;
      case 'nV3P':
        this.showChart[6].show = event.target.checked;
        break;
      case 'V0W':
        this.chart[7].data.datasets[0].hidden = !event.target.checked;
        this.showChart[7].show = event.target.checked;
        this.chart[7].update();
        break;
      case 'V1W':
        this.chart[7].data.datasets[1].hidden = !event.target.checked;
        this.showChart[8].show = event.target.checked;
        this.chart[7].update();
        break;
      case 'V2W':
        this.chart[7].data.datasets[2].hidden = !event.target.checked;
        this.showChart[9].show = event.target.checked;
        this.chart[7].update();
        break;
      case 'V3W':
        this.chart[7].datasets[3].hidden = !event.target.checked;
        this.showChart[10].show = event.target.checked;
        this.chart[7].update();
        break;
      case 'nV1W':
        this.chart[8].data.datasets[0].hidden = !event.target.checked;
        this.showChart[11].show = event.target.checked;
        this.chart[8].update();
        break;
      case 'nV2W':
        this.chart[8].data.datasets[1].hidden = !event.target.checked;
        this.showChart[12].show = event.target.checked;
        this.chart[8].update();
        break;
      case 'nV3W':
        this.chart[8].data.datasets[2].hidden = !event.target.checked;
        this.showChart[13].show = event.target.checked;
        this.chart[8].update();
        break;
    }
  }
  changeCheckboxChart(show: boolean) {
    this.showCheckboxChart = show;
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
  changeDescription(show: boolean) {
    this.showDescription = show;
  }
}
