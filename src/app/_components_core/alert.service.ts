import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();

  constructor() {
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  onError(message: string) {
    this.subject.next({type: 'error', text: message});
  }
}
