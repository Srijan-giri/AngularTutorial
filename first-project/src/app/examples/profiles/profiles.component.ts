import { Component } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  name = "Srijan";
  contact = "628198273";

  list = [
    new Person("Sachin","Mumbai",8292929),
    new Person("Virat","Hydrabad",8282982)
  ]


}
