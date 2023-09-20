import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MantenimientosComponent } from './mantenimientos.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router'; // Cambio 1: Importa ActivatedRoute y convertToParamMap

// Cambio 2: Agrega las importaciones necesarias para configurar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('MantenimientosComponent', () => {
  let component: MantenimientosComponent;
  let fixture: ComponentFixture<MantenimientosComponent>;

  beforeEach(() => {
    // Cambio 3: Crea un mock de ActivatedRoute
    const mockActivatedRoute = {
      snapshot: {
        paramMap: convertToParamMap({ id: '1' }), // Ajusta el valor según tus necesidades
      },
    };

    // Cambio 4: Agrega ActivatedRoute y HttpClientTestingModule al módulo de configuración de TestBed
    TestBed.configureTestingModule({
      declarations: [MantenimientosComponent],
      imports: [HttpClientTestingModule,
      ReactiveFormsModule,
      FormsModule], // Agrega HttpClientTestingModule
      providers: [
        // Cambio 5: Proporciona el mock de ActivatedRoute como proveedor
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(MantenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
