import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ar-launcher',
  templateUrl: './arlauncher.page.html',
  styleUrls: ['./arlauncher.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ARLauncherPage implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
