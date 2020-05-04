import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private subject = new BehaviorSubject<any>({});
  private readonly tab$: Observable<any>;

  constructor() {
    this.tab$ = this.subject.asObservable();
  }

  addTabType(data: any) {
    this.subject.next(data);
  }

  getCurrentTab() {
    return this.tab$;
  }
}
