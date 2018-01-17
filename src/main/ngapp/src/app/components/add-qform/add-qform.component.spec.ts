import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQformComponent } from './add-qform.component';

describe('AddQformComponent', () => {
  let component: AddQformComponent;
  let fixture: ComponentFixture<AddQformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
