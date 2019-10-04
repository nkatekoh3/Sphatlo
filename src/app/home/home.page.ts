import { Component } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import {AppService} from 'src/app/Service/app.service';
  
import {  OnInit, ViewChild } from '@angular/core';
import {ModalController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
    return this._auth.viewShop().subscribe(data=>{
      console.log(data);
      this.shop$=data;
      console.log(this.shop$);

      return this._auth.viewKotas().subscribe(data=>{
        console.log(data);
        this.product$=data;
        console.log(this.product$);
      })
    })
    throw new Error("Method not implemented.");
  }
  

  shop$: any;
  product$:any;


  myIcon = 'home';
  
  constructor(public navCtrl: NavController,private _auth: AppService,public alerCtrl: AlertController) { }

  

}

