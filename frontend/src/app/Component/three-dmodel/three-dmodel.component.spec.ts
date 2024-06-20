import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDmodelComponent } from './three-dmodel.component';

describe('ThreeDmodelComponent', () => {
  let component: ThreeDmodelComponent;
  let fixture: ComponentFixture<ThreeDmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
