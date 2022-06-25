import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxComponentComponent } from './text-box-component.component';

describe('TextBoxComponentComponent', () => {
  let component: TextBoxComponentComponent;
  let fixture: ComponentFixture<TextBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBoxComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
