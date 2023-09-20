import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerunidadesComponent } from './verunidades.component';

// Cambio 1: Agrega las importaciones necesarias para configurar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerunidadesComponent', () => {
  let component: VerunidadesComponent;
  let fixture: ComponentFixture<VerunidadesComponent>;

  beforeEach(() => {
    // Cambio 2: Agrega HttpClientTestingModule al módulo de configuración de TestBed
    TestBed.configureTestingModule({
      declarations: [VerunidadesComponent],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule
    });

    fixture = TestBed.createComponent(VerunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
