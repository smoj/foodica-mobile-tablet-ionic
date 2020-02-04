import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    // this.slides.centeredSlides = true;
    // this.slides.slidesPerView = 1;
  }

}
