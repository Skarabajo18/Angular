import { Component } from '@angular/core';
import * as Tone from 'tone'; // importar framework de tonos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  synth = new Tone.Synth().toDestination(); 
  title = 'Piano';
  // aplicarSonido(numero: number): void {
  // const audio = new Audio();
  // audio.src = '../assets/sonidos/note' + numero + '.wav';
  // audio.load();
  // audio.play();
  // }
  playNote(noteName: string) {
    this.synth.triggerAttackRelease(noteName, '8n');
  }
}


