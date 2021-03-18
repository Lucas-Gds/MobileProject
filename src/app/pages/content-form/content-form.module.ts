import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentFormPageRoutingModule } from './content-form-routing.module';

import { ContentFormPage } from './content-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentFormPageRoutingModule
  ],
  declarations: [ContentFormPage]
})
export class ContentFormPageModule {}
