import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepostajesComponent } from './repostajes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'; // Cambio 1: Importa RouterTestingModule

describe('RepostajesComponent', () => {
  let component: RepostajesComponent;
  let fixture: ComponentFixture<RepostajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepostajesComponent],
      imports: [
        HttpClientTestingModule, // Cambio 2: Agrega HttpClientTestingModule
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule, // Cambio 3: Agrega RouterTestingModule
      ],
    });

    fixture = TestBed.createComponent(RepostajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
