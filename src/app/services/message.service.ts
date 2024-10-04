import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../types/message-response.type';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private   endpointUrl = 'http://localhost:8080/api/chat'

  constructor(private http : HttpClient) { }

  send(message:String):Observable<MessageResponse>{

    const data = {message}

    return this.http.post<MessageResponse>(this.endpointUrl, data)
  }
}
