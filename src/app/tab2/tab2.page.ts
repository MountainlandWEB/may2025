import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [RouterModule, IonButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {
  router = inject(Router);

  constructor() {}

  goToTab1() {
    this.router.navigate(['/tabs/tab1']);
  }

}
