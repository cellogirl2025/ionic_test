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

  

const speak = async () => {
  await TextToSpeech.speak({
    text: 'This is a sample text.',
    lang: 'en-US',
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    category: 'ambient',
    queueStrategy: 1
  });
};

const stop = async () => {
  await TextToSpeech.stop();
};

const getSupportedLanguages = async () => {
  const languages = await TextToSpeech.getSupportedLanguages();
};

const getSupportedVoices = async () => {
  const voices = await TextToSpeech.getSupportedVoices();
};

const isLanguageSupported = async (lang: string) => {
  const isSupported = await TextToSpeech.isLanguageSupported({ lang });
};
  }

  startListening () {
    SpeechRecognition.start()
  }

  stopListening() {
    SpeechRecognition.stop()
  }

  
}


