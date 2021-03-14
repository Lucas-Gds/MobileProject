import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenssagePageRoutingModule } from './menssage-routing.module';

import { MenssagePage } from './menssage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenssagePageRoutingModule
  ],
  declarations: [MenssagePage]
})
export class MenssagePageModule {}
