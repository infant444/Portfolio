import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepadeComponent } from './homepade.component';

describe('HomepadeComponent', () => {
  let component: HomepadeComponent;
  let fixture: ComponentFixture<HomepadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
