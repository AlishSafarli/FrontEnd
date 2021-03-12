//Angularda her shey klassdir.
//Komponent kendi html-nin datasini yoneten yer
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //burda deyirik ki sen bu html-in datasini yoneten qardawisan))
  templateUrl: './app.component.html',
  //Array formasindadir. Cunki birden artig css elave ede bilerem.
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*Biz burda deyisken tanimlayib, sonra hemen deyiskenleri html-hissede
  Istifade edirik */
  
  title:string = 'AlishAngular';
  user="Alish Safarli";

}
