import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud9Component } from './cloud9.component';

describe('Cloud9Component', () => {
  let component: Cloud9Component;
  let fixture: ComponentFixture<Cloud9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cloud9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloud9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
