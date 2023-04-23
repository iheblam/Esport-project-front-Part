import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaticComponent } from './fnatic.component';

describe('FnaticComponent', () => {
  let component: FnaticComponent;
  let fixture: ComponentFixture<FnaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FnaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
