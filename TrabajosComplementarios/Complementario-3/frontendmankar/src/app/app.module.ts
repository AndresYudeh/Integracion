import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './Modulos/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './Modulos/principal/principal.component';
import { InicioSesionComponent } from './Modulos/inicio-sesion/inicio-sesion.component';
import { VermantenimientosComponent } from './Modulos/vermantenimientos/vermantenimientos.component';
import { RepostajesComponent } from './Modulos/repostajes/repostajes.component';
import { VerrepostajesComponent } from './Modulos/verrepostajes/verrepostajes.component';
import { UsuariosComponent } from './Modulos/usuarios/usuarios.component';
import { VerUsuariosComponent } from './Modulos/verusuarios/verusuarios.component';
import { UnidadesComponent } from './Modulos/unidades/unidades.component';
import { VerunidadesComponent } from './Modulos/verunidades/verunidades.component';
import { MantenimientosComponent } from './Modulos/mantenimientos/mantenimientos.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent,
    pathMatch: 'full',
  },
  { path: 'principal', component: PrincipalComponent, pathMatch: 'full' },
  {
    path: 'mantenimientos',
    component: MantenimientosComponent,
    pathMatch: 'full',
  },
  {
    path: 'vermantenimientos',
    component: VermantenimientosComponent,
    pathMatch: 'full',
  },
  { path: 'repostajes', component: RepostajesComponent, pathMatch: 'full' },
  {
    path: 'verrepostajes',
    component: VerrepostajesComponent,
    pathMatch: 'full',
  },
  { path: 'usuarios', component: UsuariosComponent, pathMatch: 'full' },
  { path: 'verusuarios', component: VerUsuariosComponent, pathMatch: 'full' },
  { path: 'unidades', component: UnidadesComponent, pathMatch: 'full' },
  { path: 'verunidades', component: VerunidadesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PrincipalComponent,
    InicioSesionComponent,
    VermantenimientosComponent,
    RepostajesComponent,
    VerrepostajesComponent,
    UsuariosComponent,
    VerUsuariosComponent,
    UnidadesComponent,
    VerunidadesComponent,
    MantenimientosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
