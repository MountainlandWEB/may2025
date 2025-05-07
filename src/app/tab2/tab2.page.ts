import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shareOutline } from 'ionicons/icons';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonIcon, IonButtons, RouterModule, IonButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {
  router = inject(Router);

  constructor() {
    addIcons({ shareOutline})
  }

  goToTab1() {
    this.router.navigate(['/tabs/tab1']);
  }

  async openShare() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right now',
      url: 'https://mtechsports2025.web.app/',
      dialogTitle: 'Share Mtech Sports',
    });
  }
}
