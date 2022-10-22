import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  editedu : Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router, ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data => {
      this.editedu = data;
    }, err => {
      alert("Error al modificar Educación");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.editedu).subscribe(
      data => {this.router.navigate(['']);
    }, err => {
      alert("Error al modificar Experiencia Laboral");
      this.router.navigate(['']);
    })
  }

}
