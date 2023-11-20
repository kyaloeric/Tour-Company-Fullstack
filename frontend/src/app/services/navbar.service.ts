import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private showNavbarSource = new BehaviorSubject<boolean>(true);
  showNavbar$ = this.showNavbarSource.asObservable();

  setShowNavbar(value: boolean) {
    this.showNavbarSource.next(value);
  }
}
