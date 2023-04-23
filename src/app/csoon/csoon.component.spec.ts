import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoonComponent } from './csoon.component';

describe('CsoonComponent', () => {
  let component: CsoonComponent;
  let fixture: ComponentFixture<CsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
