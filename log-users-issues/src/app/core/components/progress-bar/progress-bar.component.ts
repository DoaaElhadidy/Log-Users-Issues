import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() steps: string[] = [];
  @Input() activeStep: string = '';

  displayedSteps: {name:string, active:boolean}[] = [];

  constructor() { }

  ngOnChanges(): void {
    let activeStepIndex = this.steps.findIndex(i => i === this.activeStep);
    this.displayedSteps = this.steps.map((step,index)=> ({name: step, active: index <= activeStepIndex }));
  }

  ngOnInit(): void {
  }

}