import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAndCategoryPage } from './search-and-category';

@NgModule({
  declarations: [
    SearchAndCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchAndCategoryPage),
  ],
})
export class SearchAndCategoryPageModule {}
