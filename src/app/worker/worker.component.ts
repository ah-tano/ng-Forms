import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Worker } from '../worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {

  position = ['DevOps', 'Front-end Developer', 'Back-end Developer', 'Junior Front-end Developer']

  model = new Worker(2, 'Bob', this.position[3], 'buy flip flops from different countries');

  submitted = false;

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  goBack() {
    this.location.back();
  }

}

