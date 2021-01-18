import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import Enable HTTP services
const url = 'https://5fc5b8b74931580016e3c0ac.mockapi.io/api/v1/';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(
    private http: HttpClient // Inject HttpClient มาใช้ใน component หรือ service.
  ) {}

  refresh() {
    return this.http.get(`${url}/leaveWork`).toPromise();
  }

  create(data: any) {
    return this.http.post(`${url}/leaveWork`, data).toPromise();
  }

  edit(data: any, id: any) {
    return this.http.put(`${url}/leaveWork/${id}`, data).toPromise();
  }

  delete(id: any) {
    return this.http.delete(`${url}/leaveWork/${id}`).toPromise();
  }
}
