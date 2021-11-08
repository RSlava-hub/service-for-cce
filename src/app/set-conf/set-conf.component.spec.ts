import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConfComponent } from './set-conf.component';

describe('SetConfComponent', () => {
  let component: SetConfComponent;
  let fixture: ComponentFixture<SetConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
