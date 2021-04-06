import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-arraytask',
  templateUrl: './arraytask.component.html',
  styleUrls: ['./arraytask.component.css']
})
export class ArraytaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

   cartesian(...args) {
  
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
               
            else
                helper(a, i+1);

               
                
                
        }
       
    }
    helper([], 0);
    return r;
}

  

}
