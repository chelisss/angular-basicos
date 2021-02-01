import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{


  heroes:string[] = ['IronMan','Hulk','SpiderMan','Capitan América'];
  heroeBorrado:string ='';

  borrarHeroe(index:number){
    
      let heroeBorrado = this.heroes[index];
      this.heroes.splice(index, 1);

      this.heroeBorrado = heroeBorrado;

    console.log("Borrando a: "+heroeBorrado);
  }

}
