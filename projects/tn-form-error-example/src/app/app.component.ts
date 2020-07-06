import { TnFormErrorService } from '@ahmedtamseer/tn-form-error';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'tn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  demoForm: FormGroup;
  ngModalExample;

  constructor(
    private fb: FormBuilder,
    private tnFormErrorService: TnFormErrorService
  ) {
    console.log(this.tnFormErrorService);
    
    this.demoForm = new FormGroup({
      name: new FormControl('', [this.tnFormErrorService.nameValidator]),
      us_mobile: new FormControl('', [this.tnFormErrorService.usMobileValidator]),
      us_mobile_custom: new FormControl('', [this.tnFormErrorService.usMobileValidator]),
      in_mobile: new FormControl('', [this.tnFormErrorService.inMobileValidator]),
      email: new FormControl('', [this.tnFormErrorService.emailValidator]),
      password: new FormControl('', [this.tnFormErrorService.passwordValidator]),
      year: new FormControl('', [this.tnFormErrorService.yearValidator]),
      number: new FormControl('', [this.tnFormErrorService.numberValidator]),
      fulldate: new FormControl('', [this.tnFormErrorService.fullDateValidator]),
      required: new FormControl('', Validators.required),
      min: new FormControl('', Validators.minLength(4)),
      max: new FormControl('', Validators.maxLength(4)),
      pattern: new FormControl('', Validators.pattern(/^[a-z0-9_-]{8,15}$/)),
      array_field: this.fb.array([]),
      optional: new FormControl('')
    });
    this.AddArrayControl();    
    
  // this.ngModalExample = new FormControl('', [Validators.required]);
  }

  AddArrayControl() {
    try {
      this.GetArray.push(this.fb.group({
        name: ["", Validators.required],
        optional: [""]
      }));

    } catch (error) {

    }
  }

  RemoveArrayControl(i) {
    this.GetArray.removeAt(i);
  }
  
  private get GetArray(): FormArray {
    return this.demoForm.controls.array_field as FormArray;
  }
}



