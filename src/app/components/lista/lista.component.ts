import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

   items:any;
  EditarItem:any = {
    name: ''
  } 

  constructor(private conexion:ConexionService) {
    this.conexion.ListaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
      
    })
   }

  ngOnInit() {
  }

   Eliminar(item){
    this.conexion.EliminarItem(item);
  }

  Editar(item){
    this.EditarItem = item;
  }

  AgregarItemEditado(){
    this.conexion.EditarItem(this.EditarItem);
  } 

}
