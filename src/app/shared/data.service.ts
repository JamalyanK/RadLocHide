import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  i = 0;
  colors = ['black', 'red', 'yellow', 'blue'];
  series = ['Series A', 'Series B', 'Series C', 'Series D'];
  private arr;
  onClick: EventEmitter<any> = new EventEmitter();

  public doClick(x) {
    this.arr = [
      {data: x, label: this.series[this.i]},
      {
        borderColor: this.colors[this.i],
        backgroundColor: 'rgba(0,0,0,0)'
      }
    ];
    this.onClick.emit(this.arr);
    this.i++;
  }

}
