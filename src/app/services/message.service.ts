import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export class Message {
  content: string;
  style: string;

  constructor(content, style?) {
    this.content = content
    this.style = style || 'info'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[];

  getMessages(): Message[] {
    return this.messages;
  }

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
