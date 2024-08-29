import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    myReactiveForm:any;
    myAccordion =[
      {
        sectionHeader:'section 1',
        sectionDetails:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
      }
    ]

    ngOnInit(): void {
        this.myReactiveForm = new FormGroup({
          sectionHeader:new FormControl(''),
          sectionDetails:new FormControl('')
        });
        console.log(this.myReactiveForm);
    }
    OnSubmit(){
      console.log('onSubmit Triggered >>>', this.myReactiveForm.value);
      this.myAccordion.push(this.myReactiveForm.value);
      this.myReactiveForm.reset();
    }
}

