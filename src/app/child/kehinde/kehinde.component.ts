import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kehinde',
  templateUrl: './kehinde.component.html',
  styleUrls: ['./kehinde.component.scss']
})
export class KehindeComponent implements OnInit {

  @Input() Food = "rice"    //Input Decorators to access data from child to parent
  constructor() { }         //From kehinde to Dashboard

  ngOnInit(): void {
  }

}
