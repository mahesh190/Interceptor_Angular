import { AbstractControl } from '@angular/forms';

export function passMatch(user_password: string, confirm_passwords: string) {
  return function (form: AbstractControl) {
    let passwd = form.get(user_password)?.value
    let confirmpass = form.get(confirm_passwords)?.value
    if (passwd === confirmpass) {
      return null;
    }
    return { passwordsMismatch: true };
  }
}
