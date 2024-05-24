import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Lab3 } from '../models/databaseLab3';
import { FormLab3, Lab3Data, chartShow, formData } from '../models/interface';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css'],
})
export class Lab3Component implements OnInit, OnDestroy {
  przelicznik: number = 0;
  inter: any;
  label: number = 0.0;
  chart: any[] = [];
  dane: Lab3Data[] = [];
  X: number[] = [];
  V: number[] = [];
  mm: number[] = [];
  'm/s': number[] = [];
  'm/s^2': number[] = [];
  'rad/s': number[] = [];
  'rad/s^2': number[] = [];
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
  dataForm: FormLab3 = {
    form: {
      VDown: 0,
      DDown1: 0,
      DDown2: 0,
      VUp: 10,
      DUp1: 1250,
      DUp2: 500,
    },
    switchFrom: true,
  };
  ngOnInit(): void {
    this.calculate();
    this.dataForm;
    this.showChart.push({ name: 'dist', show: true });
    this.showChart.push({ name: 'V', show: true });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });
    this.chartSetting.push({ yStart: 0, yStop: 10, xLength: 10 });

    this.dane = Lab3;
    this.dataLength = this.dane.length;
    this.initData();
    this.ileUsu = this.dataLength;
    this.chart.push(
      new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Napięcie [V]',
              data: this.V,
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
              text: 'Napięcie [V]',
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
    ////////////Przemieszczenie
    this.chart.push(
      new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Przemieszczenie [mm]',
              data: this.mm,
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
              text: 'Przemieszczenie [mm]',
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
                text: 'Przemieszczenie [mm]',
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
    ///Prędkość [m/s]
    this.chart.push(
      new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Prędkość [m/s]',
              data: this['m/s'],
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
              text: 'Prędkość [m/s]',
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
    ///Przyśpieszenie [m/s^2]
    this.chart.push(
      new Chart('canvas3', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Przyśpieszenie [m/s^2]',
              data: this['m/s^2'],
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
              text: 'Przyśpieszenie [m/s^2]',
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
                text: 'Przyśpieszenie [m/s^2]',
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
    ////////////////////// Prędkość obrotowa
    this.chart.push(
      new Chart('canvas4', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Prędkość obrotowa [rad/s]',
              data: this['rad/s'],
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
              text: 'Prędkość obrotowa [rad/s]',
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
                text: 'Prędkość obrotowa [rad/s]',
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
    //////////Przyśpieszenie obrotowe
    this.chart.push(
      new Chart('canvas5', {
        type: 'line',
        data: {
          labels: this.X,
          datasets: [
            {
              label: 'Przyśpieszenie obrotowe[rad/s^2]',
              data: this['rad/s^2'],
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
              text: 'Przyśpieszenie obrotowe[rad/s^2]',
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
                text: 'Przyśpieszenie obrotowe[rad/s^2]',
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
  initData = () => {
    this.label = 0;
    this.numer = 2;
    this.X.length = 0;
    this.V.length = 0;
    this.mm.length = 0;
    this['m/s'].length = 0;
    this['m/s^2'].length = 0;
    this.X.push(0.0);
    this.V.push(this.dane[0].V);
    this.mm.push(this.dane[0].mm);
    this['m/s'].push(this.dane[0]['m/s']);
    this['m/s^2'].push(this.dane[0]['m/s^2']);
    this.X.push(0.01);
    this.V.push(this.dane[1].V);
    this.mm.push(this.dane[1].mm);
    this['m/s'].push(this.dane[1]['m/s']);
    this['m/s^2'].push(this.dane[1]['m/s^2']);
  };
  Update = () => {
    this.numer = this.numer + 2;
    this.label = Math.round((this.label + 0.02) * 100) / 100;
    this.X.push(this.label);
    this.V.push(this.dane[this.numer % this.dataLength].V);
    this.mm.push(
      (this.dane[this.numer % this.dataLength].mm / 50) * this.przelicznik
    );
    this['m/s'].push(
      (this.dane[this.numer % this.dataLength]['m/s'] / 50) * this.przelicznik
    );
    this['m/s^2'].push(
      (this.dane[this.numer % this.dataLength]['m/s^2'] / 50) * this.przelicznik
    );
    this['rad/s'].push(
      (this.dane[this.numer % this.dataLength]['mm'] / 50) * this.przelicznik
    ); // do poprawy
    this['rad/s^2'].push(
      this.dane[this.numer % this.dataLength]['m/s'] * this.przelicznik
    ); // do poprawy
    if (this.X.length > this.dataLength / 2) {
      this.USUN();
    }
    this.updateChart();
  };
  USUN = () => {
    this.X.shift();
    this.V.shift();
    this.mm.shift();
    this['m/s'].shift();
    this['m/s^2'].shift();
    this['rad/s^2'].shift();
    this['rad/s'].shift();
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
    this.initData();
    this.updateChart();
    this.isRun = false;
    this.StopButton = false;
    this.RestartButton = true;
    this.StartButton = false;
  }
  onChange(event: any) {
    this.showChart.forEach((e) => {
      if (e.name == event.target.name) e.show = event.target.checked;
    });
    console.log(this.showChart);
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
  saveForm(dataForm: FormLab3) {
    this.dataForm = dataForm;
    this.calculate();
    this.chanegScalesY();
  }
  calculate() {
    if (this.dataForm.switchFrom)
      this.przelicznik =
        (this.dataForm.form.DUp1 - this.dataForm.form.DDown1) /
        (this.dataForm.form.VUp - this.dataForm.form.VDown);
    else
      this.przelicznik =
        (this.dataForm.form.DUp2 - this.dataForm.form.DDown2) /
        (this.dataForm.form.VUp - this.dataForm.form.VDown);
  }
  chanegScalesY() {
    this.chart[0].options.scales.y.max = this.dataForm.form.VUp;
    this.chart[0].options.scales.y.min = this.dataForm.form.VDown;
    this.chart[1].options.scales.y.max = this.dataForm.form.DUp2;
    this.chart[1].options.scales.y.min = this.dataForm.form.DDown2;
    this.chart[4].options.scales.y.max = this.dataForm.form.DUp1;
    this.chart[4].options.scales.y.min = this.dataForm.form.DDown1;
    this.chart.forEach((e) => {
      e.update();
    });
  }
}
