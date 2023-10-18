import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerUsuariosComponent } from './verusuarios.component';

// Cambio 1: Agrega las importaciones necesarias para configurar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerUsuariosComponent', () => {
  let component: VerUsuariosComponent;
  let fixture: ComponentFixture<VerUsuariosComponent>;

  beforeEach(() => {
    // Cambio 2: Agrega HttpClientTestingModule al módulo de configuración de TestBed
    TestBed.configureTestingModule({
      declarations: [VerUsuariosComponent],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule
    });

    fixture = TestBed.createComponent(VerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
