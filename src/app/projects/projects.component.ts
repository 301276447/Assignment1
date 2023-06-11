import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Mini Car',
      image: 'assets/minicar.jfif',
      description: 'Developping various API and functionality for the Minicar',
      role: 'Software Engineer',
      outcome: 'In progress'
    },
    {
      title: 'Pefect Humanoide',
      image: 'assets/humanoide.jfif',
      description: 'Designed to mimic human form and function, providing a range of capabilities and functionalities. ',
      role: 'Analyst',
      outcome: 'In Progress'
    },
    {
      title: 'Application',
      image: 'assets/bird.jpg',
      description: 'application is designed to provide a comprehensive set of functionalities tailored specifically for students.',
      role: 'Developper',
      outcome: 'Completed and deployed'
    }
  ];

}
export interface Project {
  title: string;
  image: string;
  description: string;
  role: string;
  outcome: string;
}
