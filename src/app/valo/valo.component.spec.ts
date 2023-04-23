import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoComponent } from './valo.component';

describe('ValoComponent', () => {
  let component: ValoComponent;
  let fixture: ComponentFixture<ValoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
