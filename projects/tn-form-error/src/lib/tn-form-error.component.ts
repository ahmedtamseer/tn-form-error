import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
// @dynamic
@Component({
  selector: 'tn-form-error',
  template: `<ul class="r-ul" *ngIf="shouldShowErrors()">
  <li [class]="class" *ngFor="let error of listOfErrors()">{{error}}</li>
</ul>
  `,
  styles: [`.r-ul {list-style: none; margin-block-start: 0; padding-inline-start: 0;} .r-c {color: red;}`]
})
export class TnFormErrorComponent {
  @Input() private control: AbstractControlDirective | AbstractControl;
  @Input() class: string = "r-c";
  @Input() field: string = "Field";
  @Input() msg: string = "";

  private static readonly errorMessages = {
    'required': (params, msg, field) => msg ? msg : field + ' can\'t be blank',
    'minlength': (params, msg) => msg ? msg : 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params, msg) => msg ? msg : 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params, msg) => msg ? msg : 'The required pattern is: ' + params.requiredPattern,
    'email': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'name': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'error': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'number': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'mobile': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'year': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'fulldate': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example,
    'passowrd': (params, msg) => msg ? msg : params.message + ". Ex: " + params.example
  };

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {    
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field], this.field, this.msg));
  }

  private getMessage(type: string, params: any, field: string, msg: string) {
    return TnFormErrorComponent.errorMessages[type](params, msg, field);
  }
}
