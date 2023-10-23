import { Component } from '@angular/core';

import { Course } from 'models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lektion1_1';
  courses: Course[] = [
    {
      name: 'Advanced Frontend Development',
      code: 'SWAFE',
      ects: 5,
    },
    {
      name: 'Mobile Application Development',
      code: 'SWMAD-01',
      ects: 5,
    },
  ];
}
