import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * we will use this service 
 * to define a service which we will use to 
 * communicate data/messages between the different components
 * i used the service mainly to send the result of 
 * the add/edit/delete employees operations from dialogcomponents --> employeecomponent
 * we will use the concept of subject/and subscribe , the same concept of the MQTT protocole
 * so dialog component will be the publisher and employeecomponent will be the subscriber
 */
export class InteractionComponentsService {
  
  // here we will put the list of our subject, subjet=topic
  private _resultMessage=new Subject<string>();
  //expose the subject as an Observable , so we can subscribe to it
  // to declare Observable we use $ as bellow
  resultMessage$=this._resultMessage.asObservable();
  constructor() { }
  /**
   * by this methode we send the messages from dialogcomponents --> empoyeecomponent
   * @param message the message that we want to send it, the message here represent the result of add/edit/delete employee
   */
  publishMessage(message:string){
   this._resultMessage.next(message) ; // push (publish) the message in to _resultMessage
  }
}
