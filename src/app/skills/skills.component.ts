import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];
}
