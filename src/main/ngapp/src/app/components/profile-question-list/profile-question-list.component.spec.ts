import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQuestionListComponent } from './profile-question-list.component';

describe('ProfileQuestionListComponent', () => {
  let component: ProfileQuestionListComponent;
  let fixture: ComponentFixture<ProfileQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
