import { Component } from '@angular/core';

import { scheduleMap } from './app.constants';

const standaardTekst = 'Ga met de muis over de dag om het rooster te zien.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Henk de Boer';
  message = 'Inklokken';
  currentSchedule = standaardTekst

  // CODE HIER
}
