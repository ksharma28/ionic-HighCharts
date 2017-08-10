import * as HighCharts from 'highcharts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MessageProvider} from '../../providers/message/message';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

messageList=[];
  ml=[];

  ionViewDidLoad() {
//this.messageProvider.getMessages().subscribe(data =>ml = data.Items)

   // var ml=[];
    this.messageProvider.getMessages().subscribe(data => this.ml= data.Items);
    var myChart = HighCharts.chart('container', {

      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Humidity',
        data: $(jQuery.parseJSON(this.ml)).each(function (){
          x: this.Items.humidity
          y: this.Items.Date

        })
      }]
    });
  }


  constructor(private messageProvider: MessageProvider) {
    this.getMessages();
  }

  getMessages(){
    this.messageProvider.getMessages().subscribe(data => this.messageList= data.Items);
  }

}
