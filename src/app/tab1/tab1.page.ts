import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButtons, IonIcon, IonButton, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonIcon, IonButtons, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  aboutCtrl = inject(ModalController);

  constructor() {
    addIcons({ informationCircleOutline });
  }

  async openAbout() {
    const modal = await this.aboutCtrl.create({
      component: AboutPage,
      breakpoints: [0, 0.5, .9],
      initialBreakpoint: .9,
    });
    modal.present();
  }
}
