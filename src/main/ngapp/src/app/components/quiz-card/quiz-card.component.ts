import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { Question } from '../../interfaces/question';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css'],
})
export class QuizCardComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }
}
