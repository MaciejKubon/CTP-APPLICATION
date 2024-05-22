import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  ActiveLab: Number = 1;
  ChangeActiveLab(value: number) {
    this.ActiveLab = value;
  }
  // chart: any = [];
  // dane = [12, 19, 3, 5, 2, 3];
  // label = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  // constructor() {}

  // ngOnInit() {
  //   this.chart = new Chart('canvas', {
  //     type: 'line',
  //     data: {
  //       labels: this.label,
  //       datasets: [
  //         {
  //           label: '# of Votes',
  //           data: this.dane,
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }

  // DODAJ() {
  //   this.dane.push(10);
  //   this.label.push('DODANY');
  //   this.chart.update();
  // }
  // USUN() {
  //   this.dane.shift();
  //   this.label.shift();
  //   this.chart.update();
  // }
}
