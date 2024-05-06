import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11childComponent } from './task11child.component';

describe('Task11childComponent', () => {
  let component: Task11childComponent;
  let fixture: ComponentFixture<Task11childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task11childComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task11childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
