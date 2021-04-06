import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-fiboask',
  templateUrl: './fiboask.component.html',
  styleUrls: ['./fiboask.component.css']
})
export class FiboaskComponent implements OnInit {
  
 
  
  constructor() {
    
  }
  
  ngOnInit(): void {
    
  }
 
    
    fibo(){

      
      var n1 :number = 0;
      var n2 :number = 1;
      var nextTerm :number ;

const number = parseInt(prompt('Enter the number of terms: '));



console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
  
}