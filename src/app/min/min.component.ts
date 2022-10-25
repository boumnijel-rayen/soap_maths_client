import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.css']
})
export class MinComponent implements OnInit {

  myForm:any
  result:string = "";
  start:any
  end:any
  response:any
  constructor(private math:MathsService,private builder:FormBuilder) { 
    this.myForm = this.builder.group({
      x:['',Validators.required],
      y:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calculate(){
    this.math.min(this.myForm.value.x,this.myForm.value.y).subscribe(response=>{
      this.response = response.toString();
      this.start = this.response.indexOf("Result>");
      this.end = this.response.indexOf("</tns:minResult");
      this.result = this.response.substring(this.start+7,this.end);
    });
  }

}
