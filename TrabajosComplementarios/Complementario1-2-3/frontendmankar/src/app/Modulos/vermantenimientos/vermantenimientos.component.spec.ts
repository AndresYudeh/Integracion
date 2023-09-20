import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VermantenimientosComponent } from './vermantenimientos.component';

// Cambio 1: Importa ActivatedRoute y crea un mock para usar en la prueba
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

// Cambio 2: Agrega las importaciones necesarias para configurar HttpClientTestingModule y RouterTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VermantenimientosComponent', () => {
  let component: VermantenimientosComponent;
  let fixture: ComponentFixture<VermantenimientosComponent>;

  beforeEach(() => {
    // Cambio 3: Crea un mock de ActivatedRoute
    const mockActivatedRoute = {
      snapshot: {
        paramMap: convertToParamMap({ id: '1' }), // Ajusta el valor según tus necesidades
      },
    };

    // Cambio 4: Agrega HttpClientTestingModule y RouterTestingModule al módulo de configuración de TestBed
    TestBed.configureTestingModule({
      declarations: [VermantenimientosComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], // Agrega RouterTestingModule
      providers: [
        // Cambio 5: Proporciona el mock de ActivatedRoute como proveedor
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(VermantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
