import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AccountService {

  public server = localStorage.getItem('serverName');

  constructor(private http: Http) {
  }

  GetAccountBillingSettings(): Observable<any> {
    const urlGetAccountBillingSettings = 'http://' + this.server + ':4580/sob/api/GetAccountBillingSettings';
    return this.http.get(urlGetAccountBillingSettings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not verify login'));
  }

  PostAccountBillingSettings(): Observable<any> {
    const urlPostAccountBillingSettings = 'http://' + this.server + ':4580/sob/api/PostAccountBillingSettings';
    return this.http.post(urlPostAccountBillingSettings, {})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not post billing settings'));
  }

  GetAccountNotificationsSettings(): Observable<any> {
    const urlGetAccountNotificationsSettings = 'http://' + this.server + ':4580/sob/api/GetAccountNotificationsSettings';
    return this.http.get(urlGetAccountNotificationsSettings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get notification settings'));
  }

  PostAccountNotificationsSettings(): Observable<any> {
    const urlPostAccountNotificationsSettings = "http://" + this.server + ":4580/sob/api/PostAccountNotificationsSettings";
    return this.http.post(urlPostAccountNotificationsSettings, {})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get notification settings'));
  }

  GetAccountGeneralSettings(): Observable<any> {
    const urlGetAccountGeneralSettings = "http://" + this.server + ":4580/sob/api/GetAccountGeneralSettings";
    return this.http.get(urlGetAccountGeneralSettings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not get account general settings'));
  }

  PostAccountGeneralSettings(settings): Observable<any> {
    const urlPostAccountGeneralSettings = "http://" + this.server + ":4580/sob/api/PostAccountGeneralSettings";
    return this.http.post(urlPostAccountGeneralSettings, settings)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not post account general settings'));
  }
}
