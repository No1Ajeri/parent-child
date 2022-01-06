import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentBeverage = "coffee";
  beverages :any = ['milk', 'tea', 'coffee', 'juice'];        //used in addBeverage() function below
  constructor(private router: Router, private route: ActivatedRoute) { }

  toTaiwo(){
    this.router.navigate(['taiwo'], {relativeTo:this.route});
  }

  toKehinde(){
    this.router.navigate(['kehinde'], {relativeTo: this.route});
  }

  addBeverage(newBeverage: any){                       //To update Output decorations
    this.beverages.push(newBeverage);
    this.clearInput();     //the clearInput() function is used to reset the form after input
  }

  clearInput(){
    let input = <HTMLInputElement>document.getElementById('beverage-input'); 
    input.value = '';       //Note that 'beverage-input' is the Input Id from taiwo template
  }

  ngOnInit(): void {
  }

}
