import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Lab4 } from '../models/databaseLab4';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css'],
})
export class Lab4Component implements OnInit, OnDestroy {
  inter: any;
  label: number = 0.0;
  chart0: any = [];
  chart1: any = [];
  chart2: any = [];
  chart3: any = [];
  chart4: any = [];
  chart5: any = [];
  chart6: any = [];
  chart7: any = [];
  chart8: any = [];
  numer: number = 0;
  dataLength: number = 0;
  dane: {
    t: number;
    V0: number;
    V1: number;
    V2: number;
    '"-V3"': number;
    'n(t) dla V1': number;
    'n(t) dla V2': number;
    'n(t) dla V3': number;
  }[] = [];
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
  showChart: {
    name: string;
    show: boolean;
  }[] = [];
  showCheckboxChart: boolean = false;
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

    this.chart0 = new Chart('canvas0', {
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
    });
    this.chart1 = new Chart('canvas1', {
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
    });
    this.chart2 = new Chart('canvas2', {
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
    });
    this.chart3 = new Chart('canvas3', {
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
    });
    this.chart4 = new Chart('canvas4', {
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
    });
    this.chart5 = new Chart('canvas5', {
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
    });
    this.chart6 = new Chart('canvas6', {
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
    });
    this.chart7 = new Chart('canvas7', {
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
          },
          {
            label: 'V1 [mm]',
            data: this.V1,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
          {
            label: 'V2 [mm]',
            data: this.V2,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
          },
          {
            label: 'V3 [mm]',
            data: this.V3,
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
    this.chart8 = new Chart('canvas8', {
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
    });

    this.chart0.options.animation = false;
    this.chart1.options.animation = false;
    this.chart2.options.animation = false;
    this.chart3.options.animation = false;
    this.chart4.options.animation = false;
    this.chart5.options.animation = false;
    this.chart6.options.animation = false;
    this.chart7.options.animation = false;
    this.chart8.options.animation = false;
    //this.chart3.options.animation = false;
    //this.chart0.options.animation = false;
    //this.chart1.options.animation = false;
  }
  ngOnDestroy(): void {
    this.chart0 = [];
    this.chart1 = [];
    this.chart2 = [];
    this.chart3 = [];
    this.chart4 = [];
    this.chart5 = [];
    this.chart6 = [];
    this.chart7 = [];
    this.chart8 = [];
    this.dane = [];
    clearInterval(this.inter);
    this.isRun = false;
  }
  Update = () => {
    this.numer++;
    this.label = Math.round((this.label + 0.05) * 100) / 100;
    this.X.push(this.label);
    this.V0.push(this.dane[this.numer % this.dataLength].V0);
    this.V1.push(this.dane[this.numer % this.dataLength].V1);
    this.V2.push(this.dane[this.numer % this.dataLength].V2);
    this.V3.push(this.dane[this.numer % this.dataLength]['"-V3"']);
    this.nV1.push(this.dane[this.numer % this.dataLength]['n(t) dla V1']);
    this.nV2.push(this.dane[this.numer % this.dataLength]['n(t) dla V2']);
    this.nV3.push(this.dane[this.numer % this.dataLength]['n(t) dla V3']);
    if (this.X.length > this.dataLength / 25) {
      this.USUN();
    }

    this.chart0.update();
    this.chart1.update();
    this.chart2.update();
    this.chart3.update();
    this.chart4.update();
    this.chart5.update();
    this.chart6.update();
    this.chart7.update();
    this.chart8.update();
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
    this.chart0.update();
    this.chart1.update();
    this.chart2.update();
    this.chart3.update();
    this.chart4.update();
    this.chart5.update();
    this.chart6.update();
    this.chart7.update();
    this.chart8.update();
    this.isRun = false;
    this.StopButton = false;
    this.RestartButton = true;
    this.StartButton = false;
  }
  onChange(event: any) {
    console.log(event.target.name);

    switch (event.target.name) {
      case 'V0P':
        this.showChart[0] = event.target.checked;
        break;
      case 'V1P':
        this.showChart[1] = event.target.checked;
        break;
      case 'V2P':
        this.showChart[2] = event.target.checked;
        break;
      case 'V3P':
        this.showChart[3] = event.target.checked;
        break;
      case 'nV1P':
        this.showChart[4] = event.target.checked;
        break;
      case 'nV2P':
        this.showChart[5] = event.target.checked;
        break;
      case 'nV3P':
        this.showChart[6] = event.target.checked;
        break;
      case 'V0W':
        this.chart7.data.datasets[0].hidden = !event.target.checked;
        this.chart7.update();
        break;
      case 'V1W':
        this.chart7.data.datasets[1].hidden = !event.target.checked;
        this.chart7.update();
        break;
      case 'V2W':
        this.chart7.data.datasets[2].hidden = !event.target.checked;
        this.chart7.update();
        break;
      case 'V3W':
        this.chart7.data.datasets[3].hidden = !event.target.checked;
        this.chart7.update();
        break;
      case 'nV1W':
        this.chart8.data.datasets[0].hidden = !event.target.checked;
        this.chart8.update();
        break;
      case 'nV2W':
        this.chart8.data.datasets[1].hidden = !event.target.checked;
        this.chart8.update();
        break;
      case 'nV3W':
        this.chart8.data.datasets[2].hidden = !event.target.checked;
        this.chart8.update();
        break;
    }
  }
  changeCheckboxChart(show: boolean) {
    this.showCheckboxChart = show;
  }
}
