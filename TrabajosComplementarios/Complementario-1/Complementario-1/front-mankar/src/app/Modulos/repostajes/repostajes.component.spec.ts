import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepostajesComponent } from './repostajes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { of } from 'rxjs'; // Importa 'of' para crear un observable simulado

describe('RepostajesComponent', () => {
  let component: RepostajesComponent;
  let fixture: ComponentFixture<RepostajesComponent>;
  let service: ServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepostajesComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
      ],
      providers: [ServiciosService],
    });

    fixture = TestBed.createComponent(RepostajesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiciosService);

    // Simula el servicio addRepostaje para retornar un observable simulado
    const repostajeSimulado = {
      REPOSTAJE_ID: 1,
      REPOSTAJE_KMAC: 0,
      REPOSTAJE_COMENTARIO: '',
      ESTADO: false,
      UNIDADES_PLACA: '',
      RUTAS_ID: 0,
    };

    spyOn(service, 'addRepostaje').and.returnValue(of(repostajeSimulado));

    fixture.detectChanges();
  });

  it('llamada del servicio agregarRepostaje y reseteo nuevoRepostaje', () => {
    // Establece nuevoRepostaje con los valores correctos
    component.nuevoRepostaje = {
      REPOSTAJE_ID: 0,
      REPOSTAJE_KMAC: 0,
      REPOSTAJE_COMENTARIO: '',
      ESTADO: false,
      UNIDADES_PLACA: '',
      RUTAS_ID: 0,
    };

    // Llama a la función agregarRepostaje
    component.agregarRepostaje();

    // Comprueba que se haya llamado al servicio con los valores correctos
    expect(service.addRepostaje).toHaveBeenCalledWith(component.nuevoRepostaje);

    // Comprueba que nuevoRepostaje se haya restablecido correctamente
    expect(component.nuevoRepostaje).toEqual({
      REPOSTAJE_ID: 0,
      REPOSTAJE_KMAC: 0,
      REPOSTAJE_COMENTARIO: '',
      ESTADO: false,
      UNIDADES_PLACA: '',
      RUTAS_ID: 0,
    });
  });
});
