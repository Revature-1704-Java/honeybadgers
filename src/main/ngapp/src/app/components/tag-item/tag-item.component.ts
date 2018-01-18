import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Tag } from '../../interfaces/tag';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.css']
})
export class TagItemComponent implements OnInit {
  @Input() tag: Tag;
  random: number;
  constructor() { }

  ngOnInit() {
    this.random = this.getRandom();
  }
  getRandom(): number {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

}
