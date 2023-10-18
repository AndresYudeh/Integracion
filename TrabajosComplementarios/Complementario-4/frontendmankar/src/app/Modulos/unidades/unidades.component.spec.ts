import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnidadesComponent } from './unidades.component';
// Cambio 1: Agrega las importaciones necesarias para configurar HttpClientTestingModule
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('UnidadesComponent', () => {
  let component: UnidadesComponent;
  let fixture: ComponentFixture<UnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesComponent],
    });



    TestBed.configureTestingModule({
      declarations: [UnidadesComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ], // Agrega HttpClientTestingModule
    });

    fixture = TestBed.createComponent(UnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
