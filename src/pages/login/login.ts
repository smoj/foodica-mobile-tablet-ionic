import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  segment : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl : MenuController) {
    this.menuCtrl.enable(false, 'app-side-menu');
    this.segment = 'login';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidLeave(){
    this.menuCtrl.enable(true, 'app-side-menu');
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
