import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: {}[];

  add(message: {}) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
