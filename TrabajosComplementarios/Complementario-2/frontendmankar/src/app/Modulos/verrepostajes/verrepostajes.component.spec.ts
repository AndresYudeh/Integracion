import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerrepostajesComponent } from './verrepostajes.component';
import { RouterTestingModule } from '@angular/router/testing'; // Cambio 1: Importa RouterTestingModule

// Cambio 2: Agrega las importaciones necesarias para configurar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerrepostajesComponent', () => {
  let component: VerrepostajesComponent;
  let fixture: ComponentFixture<VerrepostajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerrepostajesComponent],
      imports: [
        HttpClientTestingModule, // Cambio 3: Agrega HttpClientTestingModule
        RouterTestingModule, // Cambio 4: Agrega RouterTestingModule
      ],
    });

    fixture = TestBed.createComponent(VerrepostajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
