import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';             //child to parent
import { Output, EventEmitter  } from '@angular/core';   //parent to child

@Component({
  selector: 'app-taiwo',
  templateUrl: './taiwo.component.html',
  styleUrls: ['./taiwo.component.scss']
})
export class TaiwoComponent implements OnInit { 

  @Input() Beverages = "tea"         //Input Decorators to access data from child to parent   //i.e From Taiwo to Dashboard
  @Output() newBeverageEvent = new EventEmitter<string>();  //OutPut Decorators to access data from Parent to child  //i.e from Dashboard to Taiwo using Event Emmiter
  constructor() { }                 

  ngOnInit(): void {
  }

  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value);      //function for output decorators
  }

}
