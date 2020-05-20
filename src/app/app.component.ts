import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {SwitchCounterService} from './switch.counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  switchesCount: number;

  constructor(private userService: UserService, private switchCounterService: SwitchCounterService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.switchesCount = this.switchCounterService.switchesCount;
    this.switchCounterService.switchCountChanged.subscribe((newValue: number) => this.switchesCount = newValue);
  }
}
