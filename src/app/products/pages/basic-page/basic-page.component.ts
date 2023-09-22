import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fERnAndO hErReRa';
  public customDate: Date = new Date();
}
