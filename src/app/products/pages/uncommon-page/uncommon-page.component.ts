import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // il8n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(name: string): void{
    if(name === 'Fernando'){
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Fernando';
      this.gender = 'male';
    }
  }

  // il8n Plural
  public clientes: string[] = ['Maria', 'Daniela' ,'Juan', 'Alberto', 'Sofia', 'Nacha', 'Marcos', 'Fede']
  public clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clientes.shift();
  }

  // KeyValue
  public person = {
    name: 'Fernando',
    age: '36',
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value=> console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500);
  }
  );


}
