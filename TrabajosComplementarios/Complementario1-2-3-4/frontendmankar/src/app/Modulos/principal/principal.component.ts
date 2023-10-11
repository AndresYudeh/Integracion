import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit  {

constructor(private router: Router,) {}

redireccionarMantenimientos() {
  this.router.navigate(['/vermantenimientos']);
}

redireccionarUsuarios() {
  this.router.navigate(['/verusuarios']);
}

redireccionarUnidades() {
  this.router.navigate(['/verunidades']);
}
redireccionarRepoostaje() {
  this.router.navigate(['/verrepostajes']);
}



ngOnInit(): void {
}



}