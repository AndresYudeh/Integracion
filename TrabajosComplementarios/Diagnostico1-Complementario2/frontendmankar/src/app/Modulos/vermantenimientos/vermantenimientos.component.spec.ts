import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermantenimientosComponent } from './vermantenimientos.component';

describe('VermantenimientosComponent', () => {
  let component: VermantenimientosComponent;
  let fixture: ComponentFixture<VermantenimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VermantenimientosComponent]
    });
    fixture = TestBed.createComponent(VermantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
