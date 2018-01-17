import { FormGroup, FormArray } from '@angular/forms';

export class CustomValidator {
    static onlyOneCorrectAnswer(fa: FormArray): {[key: string]: boolean} {
        let count = 0;
        fa.controls.forEach(el => {
            count += el.get('correct').value ? 1 : 0;
        });
        if (count > 1) {
            return {moreThanOne: true};
        }else if (count === 0) {
            return {noCorrect: true};
        }
        return null;
    }
}


