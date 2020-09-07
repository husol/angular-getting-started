import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: any;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }

}
