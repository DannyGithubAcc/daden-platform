import { Component } from '@angular/core';
import DatacardComponent from '../../stories/datacard.component';
import DashboardComponent from '../../stories/dashboard.component';

@Component({
  selector: 'app-infographic',
  standalone: true,
  imports: [DatacardComponent, DashboardComponent],
  templateUrl: './infographic.component.html',
  styleUrl: './infographic.component.scss'
})
export class InfographicComponent {
  title: string = "Tieten... titel bedoel ik";
  contenti: string = "Hier variabele content";
  cardData: string = "Hier varia DATA";


}
