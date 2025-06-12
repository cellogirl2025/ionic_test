import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonButton, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonicModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ionic_test';
}


