import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  tabletMode : boolean = false;
  slidesPerView : number = 1;
  constructor(
    public navCtrl: NavController,
    public platform : Platform
  ) {

  }

  ionViewWillLoad(){
    // Decide how many slides per view based on if its a tablet/laptop
    this.setSlidesPerView();
  }

  setSlidesPerView(){
    // Function for how many slides per view based on if its a tablet/laptop
    if(this.platform.is('tablet') || this.platform.is('core')){
      this.slides.spaceBetween = 10;
      console.log('Tablet/Laptop Mode Detected');
      this.tabletMode = true;
    } else {
      this.tabletMode = false;
    }
  }

  //If screen resizes, run the same function to make sure we tally
  checkOnResize(event: any = null){
    console.log('resized');
    this.setSlidesPerView();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    this.slideIndex = this.slides.getActiveIndex();
    // console.log("Current index is", currentIndex);
  }


}
