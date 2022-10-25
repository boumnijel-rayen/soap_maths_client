import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {

  result:string = "";
  myForm:any
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
    this.math.cos(this.myForm.value.x).subscribe(response=>{
      this.response = response.toString();
      this.start = this.response.indexOf("Result>");
      this.end = this.response.indexOf("</tns:cosResult");
      this.result = this.response.substring(this.start+7,this.end);
    });
  }

}
