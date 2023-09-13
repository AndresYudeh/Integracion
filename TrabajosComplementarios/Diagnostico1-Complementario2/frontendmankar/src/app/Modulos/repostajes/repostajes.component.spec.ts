import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostajesComponent } from './repostajes.component';

describe('RepostajesComponent', () => {
  let component: RepostajesComponent;
  let fixture: ComponentFixture<RepostajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepostajesComponent]
    });
    fixture = TestBed.createComponent(RepostajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
