import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag';

@Injectable()
export class TagService {

  constructor() { }

  getTags(): Tag[] {
    return tags;
  }

  getTagById(tagId: number): Tag {
    return tags.find((tag) => (tag.tagId === tagId));
  }

  getTagsByName(tagName: string): Tag[] {
    return tags.filter((tag) => tag.tagName === tagName);
  }

  getTagsByCreator(creator: string): Tag[] {
    return tags.filter((tag) => tag.creator === creator);
  }

}

const tags: Tag[] = [
  {
    tagId: 1,
    tagName: 'Java',
    creator: 'Kei'
  },
  {
    tagId: 2,
    tagName: 'Hibernate',
    creator: 'Jack'
  },
  {
    tagId: 3,
    tagName: 'Angular',
    creator: 'Tzu'
  },
  {
    tagId: 4,
    tagName: 'DevOps',
    creator: 'Danny'
  },
  {
    tagId:5,
    tagName: 'SQL',
    creator: 'Jonathan'
  }
];