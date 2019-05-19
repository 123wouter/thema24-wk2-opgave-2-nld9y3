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

  clockIn (event) {
    if (event.shiftKey) {
      this.message = 'Ingeklokt als docent';
    } else {
      this.message = 'Ingeklokt als student';
    }
  }

  clockOut () {
    this.message = 'Fijne dag nog.';
  }

  rooster (dag) {
    switch (dag) {
      case 0:
        dag = 'Maandag';
        break;

      case 1:
        dag = 'Dinsdag';
        break;

      case 2:
       dag = 'Woensdag';
       break;

      case 3:
        dag = 'Donderdag';
        break;

      case 4:
        dag = 'Vrijdag';
        break;
    }
    this.currentSchedule = dag + " " + scheduleMap[dag];
  }

  roosterReset () {
    this.currentSchedule = standaardTekst
  }
}
