import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
// @dynamic
@Injectable({
  providedIn: 'root'
})
export class TnFormErrorService {

  constructor() { }

  emailValidator(control: FormControl) {
    const email: string = control.value;
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z]([a-z]*[a-z]\.[a-z]{2}([a-z]*[a-z])?)*$/i;

    if (email && email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
      return { "email": { "message": "Please enter valid email address", value: control.value, example: "example.tn@tn.com" } };
    }
    return null;
  }

  nameValidator(control: FormControl) {
    const name: string = control.value;
    const NAME_REGEXP = /^[a-zA-Z \.]*$/i;

    if (name && name != "" && name.length < 2) {
      return {
        "name": { "message": "Name should contain atleast two character", value: control.value, example: "John A." }
      };
    }

    if (name && name != "" && !NAME_REGEXP.test(name)) {
      return {
        "name": { "message": "Please enter valid name address", value: control.value, example: "John A." }
      };
    }
    return null;
  }

  numberValidator(control: FormControl) {
    const number = control.value;
    const NUMBER_REGEXP = /^[0-9]*(\.[0-9]*)?$/i;
    if (number && number != "" && !NUMBER_REGEXP.test(number)) {
      return { "number": { "message": "Please enter valid number", value: control.value, example: "123.45 or -1.2" } };
    }
    return null;
  }

  usMobileValidator(control: FormControl) {
    const mobile: string = control.value;
    const MOBILE_REGEXP = /^(\(*[0-9]{3}\)*[ ]*|[0-9]{3}-)[0-9]{3} *-* *[0-9]{4}$/;
    if (mobile && mobile != "" && !MOBILE_REGEXP.test(mobile)) {
      return { "mobile": { "message": "Please enter valid mobile", value: control.value, example: "(123) 123 1234, (123) 123-1234 or 1231231234" } };
    }
    return null;
  }

  inMobileValidator(control: FormControl) {
    const mobile: string = control.value;
    const MOBILE_REGEXP = /^(\(*[9][1]\)*[ ]*|[9][1]-)* *[6-9][0-9]{3} *-* *[0-9]{2} *-* *[0-9]{2} *-* *[0-9]{2}$/;
    if (mobile && mobile != "" && !MOBILE_REGEXP.test(mobile)) {
      return { "mobile": { "message": "Please enter valid mobile", value: control.value, example: "(91) 9841-11-11-11, (91) 9841111111 or 9841111111" } };
    }
    return null;
  }

  yearValidator(control: FormControl) {
    let year = control.value;
    let YEAR_REGEXP = /^[1-2][0-9][0-9][0-9]$/i;
    if (year && year != "" && !YEAR_REGEXP.test(year)) {
      return { "year": { "message": "Please enter valid year", example: "2012"  } };
    }
    return null;
  }

  fullDateValidator(control: FormControl) {
    let fullDate = control.value;
    let FULL_DATE_REGEXP = /^[0-3]?[0-9][ -\.\/][0-1]?[0-9][ -\.\/][1-2][0-9][0-9][0-9]$/i;

    if (fullDate && fullDate != "" && !FULL_DATE_REGEXP.test(fullDate)) {
      return { "fulldate": { "message": "Please enter valid date. dd mm yyyy", example: "20 - 10 - 2020"  } };
    }
    return null;
  }

  passwordValidator(control: FormControl) {

    const PASSWORD: string = control.value;
    const UPPER_CASE_REGEXP = /^(.*[A-Z].*)$/;
    const LOWER_CASE_REGEXP = /^(.*[a-z].*)$/;
    const NUMBER_REGEXP = /^(.*[0-9].*)$/;
    const SPECIALCHARCTER_REGEXP = /^.*[!@#$%\^&*)(+=._-].*$/

    let errors = [];

    if (!PASSWORD || PASSWORD.length < 9)
      errors.push('8 character');
    if (PASSWORD && PASSWORD != "" && !UPPER_CASE_REGEXP.test(PASSWORD))
      errors.push("one uppercase letter");
    if (PASSWORD && PASSWORD != "" && !LOWER_CASE_REGEXP.test(PASSWORD))
      errors.push("one lowercase letter");
    if (PASSWORD && PASSWORD != "" && !NUMBER_REGEXP.test(PASSWORD))
      errors.push("one number");
    if (PASSWORD && PASSWORD != "" && !SPECIALCHARCTER_REGEXP.test(PASSWORD))
      errors.push("one special character");

    if (errors.length)
      return { "passowrd": { "message": "Password should contain " + errors.join(", "), value: control.value, example: "exampleTn@1_2" } };

    return null;

  }
}
