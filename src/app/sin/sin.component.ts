import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sin',
  templateUrl: './sin.component.html',
  styleUrls: ['./sin.component.css']
})
export class SinComponent implements OnInit {

  myForm:any
  result:string = "";
  start:any
  end:any
  response:any
  constructor(private math:MathsService,private builder:FormBuilder) {
    this.myForm = this.builder.group({
      x:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calculate(){
    this.math.sin(this.myForm.value.x).subscribe(response=>{
      this.response = response.toString();
      this.start = this.response.indexOf("Result>");
      this.end = this.response.indexOf("</tns:sinResult");
      this.result = this.response.substring(this.start+7,this.end);
    });
  }

}
