import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARLauncherPageRoutingModule } from './arlauncher-routing.module';

import { ARLauncherPage } from './arlauncher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARLauncherPageRoutingModule
  ],
  declarations: [ARLauncherPage]
})
export class ARLauncherPageModule {}
