import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './Modulos/inicio/inicio.component';
import { PrincipalComponent } from './Modulos/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './Modulos/inicio-sesion/inicio-sesion.component';

const routes:Routes=[
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: InicioComponent, pathMatch: 'full'  },
  {path: 'inicio-sesion', component: InicioSesionComponent, pathMatch: 'full'  },
  {path: 'principal/:User', component: PrincipalComponent, pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

