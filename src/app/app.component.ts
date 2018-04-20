import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
 /* activeUsers = [];
  inactiveUsers = [];
  constructor(private usersServices: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersServices.activeUsers;
    this.inactiveUsers = this.usersServices.inactiveUsers;
  }


  onSetToInactive(id: number) {
    this.usersServices.setToInactive(id);

  }

  onSetToActive(id: number) {
    this.usersServices.setToActive(id);  }*/
}
