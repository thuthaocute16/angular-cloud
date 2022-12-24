import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { InputData_1 } from '../shared/model';


const BaseURL = 'http://localhost:5000';
@Injectable({
  providedIn: 'root'
})

export class PredictService {

  constructor(private http: HttpClient) {
  }

  getPreidict_1(data: InputData_1): Observable<string>{
    return this.http.post<string>(BaseURL + "/flat/predict", data);
  }

  getPreidict_2(data: InputData_1): Observable<string>{
    return this.http.post<string>(BaseURL + "/house/predict", data);
  }

  getPreidict_3(data: InputData_1): Observable<string>{
    return this.http.post<string>(BaseURL + "/plot/predict", data);
  }
}
