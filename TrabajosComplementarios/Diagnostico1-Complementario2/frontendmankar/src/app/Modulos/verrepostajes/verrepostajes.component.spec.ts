import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrepostajesComponent } from './verrepostajes.component';

describe('VerrepostajesComponent', () => {
  let component: VerrepostajesComponent;
  let fixture: ComponentFixture<VerrepostajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerrepostajesComponent]
    });
    fixture = TestBed.createComponent(VerrepostajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
