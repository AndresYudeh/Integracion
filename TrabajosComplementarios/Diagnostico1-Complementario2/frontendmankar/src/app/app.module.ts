import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


import { WelcomeComponent } from './Modulos/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './Modulos/principal/principal.component';
import { InicioSesionComponent } from './Modulos/inicio-sesion/inicio-sesion.component';



const routes:Routes=[
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: WelcomeComponent, pathMatch: 'full'  },
  {path: 'inicio-sesion', component: InicioSesionComponent, pathMatch: 'full'  },
  {path: 'principal/:User', component: PrincipalComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PrincipalComponent,
    InicioSesionComponent
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
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



