import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
// import {DataService} from '../shared/data.service';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  amplituda = [];
  N;  
  P;
  d;
  K;
  I;
  f = 0;
  s = 0;
  m = 0;
  Z = 0;
  Ux = 0;
  Uj = 0;
  e = 0;
  k = 1;
  T;
  p = [];
  arr;
  gen;
  fi;
  z1;
  z2;
  Uj1;
  Uj2;

  constructor(private dataService: DataService) {
    this.dataService.onClick.subscribe(cnt => this.arr = cnt);
  }

  ngOnInit() {
    this.form = new FormGroup({
      amplituda: new FormGroup({
        a1: new FormControl(0),
        a2: new FormControl(0.1),
        a3: new FormControl(0.2),
        a4: new FormControl(0.3),
        a5: new FormControl(0.4),
        a6: new FormControl(0.5),
        a7: new FormControl(0.6),
        a8: new FormControl(0.7),
        a9: new FormControl(0.8),
        a10: new FormControl(0.9),
        a11: new FormControl(1),
      }),
      select: new FormControl(1),
      count: new FormControl(30),
      false: new FormControl(0.1),
      border: new FormControl(0.2),
      detect: new FormControl(16.03),
      expCount: new FormControl(1000)
    });
  }

  hashvel() {
    this.p = [];
    this.N
    this.P
    this.d
    this.K
    this.I
    this.gen = +this.form.get('select').value;
    this.N = +this.form.get('count').value;
    this.P = +this.form.get('false').value;
    this.d = +this.form.get('border').value;
    this.K = +this.form.get('detect').value;
    this.I = +this.form.get('expCount').value;
    for (this.k; this.k <= 11; this.k++) {
      this.amplituda[this.k - 1] = +this.form.get('amplituda.a' + this.k).value;
    }
    this.k = 1;
    for (this.k; this.k <= 11; this.k++) {
      this.m = 0;

      for (let i = 1; i <= this.I; i++) {
        if (this.gen == 1) {
          this.Z = 0;
        } else {
          this.fi = 2 * Math.PI * Math.random();
          this.z1 = 0;
          this.z2 = 0;
        }

        for (let j = 1; j <= this.N; j++) {
          this.Ux = 0;

          for (let h = 1; h <= 12; h++) {
            this.e = Math.random();
            this.Ux = this.Ux + this.e;
          }

          this.Ux = this.Ux - 6;

          //----//
          if (this.gen == 1) {
            this.Uj = this.amplituda[this.k - 1] + this.Ux;
            if (this.Uj <= this.d) {
              this.f = this.f + 1;
            } else {
              this.Z = this.Z + 1;
            }
          } else {
            this.Uj1 = this.amplituda[this.k - 1] * Math.cos(this.fi) + this.Ux;
            this.Uj2 = this.amplituda[this.k - 1] * Math.sin(this.fi) + this.Ux;
            if (this.Uj1 <= this.d) {
              this.f = this.f + 1;
            } else {
              this.z1 = this.z1 + 1;
              if (this.Uj2 <= this.d) {
                this.f = this.f + 1;
              } else {
                this.z2 = this.z2 + 1;
              }
            }
          }

        }
        if (this.gen == 1) {
          this.T = this.Z - this.K;
        } else {
          this.T = Math.pow(this.z1, 2) + Math.pow(this.z2, 2) - this.K;
        }

        if (this.T < 0) {
          this.s = this.s + 1;
        } else {
          this.m = this.m + 1;
        }

      }

      this.p.push(this.m / this.I);

    }

    // this.form.get('count').reset();
    // this.form.get('false').reset();
    // this.form.get('border').reset();
    // this.form.get('detect').reset();
    // this.form.get('expCount').reset();
    // this.form.get('select').reset();

  }

  public clickMe() {
    this.dataService.doClick(this.p, this.N, this.d, this.P);
  }
}



