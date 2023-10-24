import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    content: new FormControl('')
  });

  submited: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        name: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        content: ['', [
          Validators.required,
          Validators.minLength(75),
          Validators.maxLength(500),
        ]]
      }
    );

  }

  get controls(): {[key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submited = true;

    if(this.form.invalid){
      console.log(JSON.stringify(this.form.value, null, 2));
      return
    }else{
      console.log('success');
    }
  }

}
