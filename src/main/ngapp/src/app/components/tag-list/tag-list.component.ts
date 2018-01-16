import { Component, OnInit } from '@angular/core';
import { Tag } from '../../interfaces/tag';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  public tags: Tag[];
  public filteredTags: Tag[];
  public tagFilter: string;
  public searchMode: string;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tags = this.tagService.getTags();
    this.filteredTags = [];
    this.tags.forEach((tag) => {
      this.filteredTags.push(tag);
    });
    this.searchMode = "1";
  }

  public updateTagList(event):void {
    if(event.charCode === 32 && parseInt(this.searchMode) === 1) {
      this.filteredTags.splice(0);
      this.tags.forEach((tag) => {
        if(tag.tagName === this.tagFilter.trim()) {
          this.filteredTags.push(tag);
        }
      });
    } else if(event.charCode === 32 && parseInt(this.searchMode) === 2) {
      this.filteredTags.splice(0);
      this.tags.forEach((tag) => {
        if(tag.creator === this.tagFilter.trim()) {
          this.filteredTags.push(tag);
        }
      });
    } else if(this.tagFilter !== undefined && this.tagFilter.length === 0) {
      this.filteredTags.splice(0);
      this.tags.forEach((tag) => {
        this.filteredTags.push(tag);
      });
    }
  }

}
