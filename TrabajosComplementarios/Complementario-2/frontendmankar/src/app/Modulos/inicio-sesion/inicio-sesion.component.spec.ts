import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSesionComponent } from './inicio-sesion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Agrega la importación de FormsModule

describe('InicioSesionComponent', () => {
  let component: InicioSesionComponent;
  let fixture: ComponentFixture<InicioSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionComponent],
      imports: [HttpClientTestingModule, FormsModule], // Agrega HttpClientTestingModule y FormsModule
    });

    fixture = TestBed.createComponent(InicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
