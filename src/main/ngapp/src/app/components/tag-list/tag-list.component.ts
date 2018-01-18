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

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((response) => {
      this.tags = response.sort((a, b) => {
        if(a.tagName.toLowerCase() < b.tagName.toLowerCase()) return -1;
        else if(a.tagName.toLowerCase() > b.tagName.toLowerCase()) return 1;
        else return 0;
      });
      this.filteredTags = [];
      this.tags.forEach((tag) => {
        this.filteredTags.push(tag);
      });
    });
    this.tagFilter = '';
  }

  public updateTagList(event):void {
    if(this.filteredTags !== undefined) {
      if(this.tagFilter.length === 0) {
        this.filteredTags.splice(0);
        this.tags.forEach((tag) => {
          this.filteredTags.push(tag);
        });
      } else {
        let filterTerms: string[] = this.tagFilter.trim().split(" ");
        this.filteredTags.splice(0);
        this.tags.forEach((tag) => {
          filterTerms.forEach((term) => {
            if(tag.tagName === term) {
              this.filteredTags.push(tag);
            }
          });
        });
      }
    }
  }
}