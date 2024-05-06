import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11parentComponent } from './task11parent.component';

describe('Task11parentComponent', () => {
  let component: Task11parentComponent;
  let fixture: ComponentFixture<Task11parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task11parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task11parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
