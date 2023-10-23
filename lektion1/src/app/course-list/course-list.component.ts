import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { Course } from 'models';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseListItemComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
}
