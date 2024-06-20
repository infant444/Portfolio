import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../../model/message';
import { Observable } from 'rxjs';
import { SENDMESSAGE } from '../../model/urls';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) {

   }

   sendMessage(x:Message):Observable<Message>{
    return this.http.post<Message>(SENDMESSAGE,x);
   }
}
