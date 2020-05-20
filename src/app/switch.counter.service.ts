import {EventEmitter, Output} from '@angular/core';

export class SwitchCounterService {
  switchesCount = 0;
  @Output() switchCountChanged: EventEmitter<number> = new EventEmitter<number>();

  increase() {
    this.switchesCount++;
    this.switchCountChanged.emit(this.switchesCount);
  }
}
