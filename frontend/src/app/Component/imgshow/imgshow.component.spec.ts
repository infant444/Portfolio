import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgshowComponent } from './imgshow.component';

describe('ImgshowComponent', () => {
  let component: ImgshowComponent;
  let fixture: ComponentFixture<ImgshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
