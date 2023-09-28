import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {
  
 @Input() friendsList = [
    new Person("Ankit", "Lucknow", 2342143),
    new Person("Srijan", "Kolkata", 6718818199),
    new Person("Aman", "Delhi", 728828),
    new Person("Gautam", "Mumbai", 717716616)
  ]
}
