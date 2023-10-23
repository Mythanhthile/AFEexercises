import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from 'models';
@Component({
  selector: 'app-course-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
})
export class CourseListItemComponent {
  @Input() course: Course | undefined;
}
