import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonButton, IonicModule } from '@ionic/angular';
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonicModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ionic_test';

  constructor() {

  }

  ngOnInit() {
    SpeechRecognition.available();

    SpeechRecognition.start({
      language: "en-US",
      maxResults: 2,
      prompt: "Say something",
      partialResults: true,
      popup: true,
    });
    // listen to partial results
    SpeechRecognition.addListener("partialResults", (data: any) => {
      console.log("partialResults was fired", data.matches);
    });

    // stop listening partial results
    SpeechRecognition.removeAllListeners();

    SpeechRecognition.stop();

    SpeechRecognition.getSupportedLanguages();

    SpeechRecognition.checkPermissions();

    SpeechRecognition.requestPermissions();

    

  
  }

  startListening () {
    SpeechRecognition.start()
    console.log("Start Listening")
  }

  stopListening() {
    SpeechRecognition.stop()
    console.log("Listening Stop")
  }

  checkLanguages() {
    SpeechRecognition.getSupportedLanguages()
    console.log("Languages Check")
  }

  
}


