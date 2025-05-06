import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonIcon, IonButton, ModalController, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';
import { AboutPage } from '../about/about.page';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonLabel, RouterModule, CommonModule, IonButton, IonIcon, IonButtons, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  aboutCtrl = inject(ModalController);
  router = inject(Router);

  persons = [
    { id: 1, name: 'Carlos', age: 25 },
    { id: 2, name: 'Ana', age: 30 },
    { id: 3, name: 'Pedro', age: 35 },
    { id: 4, name: 'Maria', age: 28 },
    { id: 5, name: 'Luis', age: 40 },
    { id: 6, name: 'Laura', age: 22 },
  ];

  constructor() {
    addIcons({ informationCircleOutline });
  }

  loadDetail(person: any) {
    this.router.navigate(['/tabs/tab1/detail'], { state: { data: person } });
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
