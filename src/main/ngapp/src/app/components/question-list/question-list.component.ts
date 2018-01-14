import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor() { }
  @Input() answers: number[];
  @Input() currentQ: number;
  @Output() currentQChange: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {
  }

  onClick(index) {
    this.currentQ = index;
    this.currentQChange.emit(this.currentQ);
  }

}
