import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class DetailPage {

  person: any;

  constructor() { }

  ionViewWillEnter() {
    this.person = history.state.data;
  }
}
