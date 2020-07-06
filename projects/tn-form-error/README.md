# TnFormError
The official [Angular](https://angular.io/) library for [Form Validation](https://angular.io/guide/form-validation/).

```bash
ng add @angular/tn-form-error
```

## What is TnFormError?

TnFormError is angular package for validating both reactive and template driven forms.

## Quickstart

### 1. Create a new project

```bash
npm install -g @angular/cli
ng new <project-name>
cd <project-name>
```

The Angular CLI's `new` command will set up the latest Angular build in a new project structure.

### 2. Install Angular Form Error

```bash
ng add @angular/tn-form-error
```

Now that you have a new project setup, install Angular Form Error from npm.

### 3. Setup `@NgModule` for the `TnFormErrorModule`

Open `/src/app/app.module.ts`, inject the Firebase providers, and specify your Firebase configuration.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TnFormErrorModule } from 'tn-form-error';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TnFormErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4. Use it in your component

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="demoForm">
    <div>
        <label for="name">Name</label>
        <input type="text" formControlName="name" name="name" placeholder="Name validator">
        <tn-form-error [control]="demoForm.controls.name" [field]="'Name'"></tn-form-error>
    </div>
  </form>
  `
})
export class MyApp {

  demoForm: FormGroup;

  constructor() {
      this.demoForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
}
```

### 5. Use TnFormErrorService service for validation

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TnFormErrorService } from 'tn-form-error';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="demoForm">
    <div>
        <label for="name">Name</label>
        <input type="text" formControlName="name" name="name" placeholder="Name validator">
        <tn-form-error [control]="demoForm.controls.name" [field]="'Name'"></tn-form-error>
    </div>
  </form>
  `
})
export class MyApp {

  demoForm: FormGroup;

  constructor(
      private tnFormErrorService: TnFormErrorService
  ) {
      this.demoForm = new FormGroup({
      name: new FormControl('', [this.tnFormErrorService.nameValidator])
    });
  }
}
```

### 6. Run your app locally

```bash
ng serve
```

## Resources

[Stackblitz Template](https://stackblitz.com/edit/angular-tn-form-error) - A demo app which shows how to use Reactive and Template Driven form.

## Developer Guide

### <tn-form-error [control]="formControl|ngModel"></tn-form-error>

| attribute   | purpose            |
| ---------|--------------------|
| `[control]` | Formcontrol or a ngModel. Required |
| `[field]` | String. Default value is 'Field'. Ex:- if you pass `[field]="'Name'"` error message will be `Name is required` else `Field is required`  |
| `[class]` | String. List of classes separated by space. By default is displayed in red color. Ex:- `[class]="'bg-danger text-white'"` |
| `[msg]` | String. Default is package generated message. You can display custom message. Ex:- `[msg]="This is custom message"` |


### TnFormErrorService

| method   | purpose            |
| ---------|--------------------|
| `.emailValidator` | To validate email. Email should have min of 5 characters |
| `.nameValidator` | To validate name. Name should contain atleast 2 characters and should not contain any special character other than a space |
| `.numberValidator` | To validate interge number. Number should contain numbers |
| `.usMobileValidator` | To validate US mobile number. Ex:- (123) 123 1234, (123) 123-1234 or 1231231234 |
| `.inMobileValidator` | To validate IN mobile number. Ex:- (91) 9841-11-11-11, (91) 9841111111, 9841-11-11-11, 9841-111111, 9841 11 11 11 or 9841111111 |
| `.yearValidator` | To validate year. Ex:- 1900 or 2100 |
| `.fullDateValidator` | To validate full date dd mm yyyy. Ex:- 20 10 1900 or 20-9-1900 |
| `.passwordValidator` | To validate Password. Password should contain min of 8 character, must have atleast one uppercase letter, one lowercase letter, one number and one special character. Ex:- exampleTn@1_2 |

