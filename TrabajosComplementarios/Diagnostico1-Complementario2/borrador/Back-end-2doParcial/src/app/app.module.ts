import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrodatosComponent } from './admin/registrodatos/registrodatos.component';
import { RgtrabComponent } from './admin/rgtrab/rgtrab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes:Routes=[
  {path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent, pathMatch: 'full'},
  {path: 'admin/registrodatos', component: RegistrodatosComponent, pathMatch: 'full'},
  {path: 'admin/rgtrab', component: RgtrabComponent, pathMatch: 'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegistrodatosComponent,
    RgtrabComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

