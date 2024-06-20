import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from '../../model/work';
import { ADDWORK, GETONEWORKS, GETWORKS } from '../../model/urls';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http:HttpClient) { }

  AddWork(x:FormData):Observable<Work>{
    return this.http.post<Work>(ADDWORK,x);
  }
  getWork():Observable<Work[]>{
    return this.http.get<Work[]>(GETWORKS);
  }
  getOneWork(id:string):Observable<Work>{
    return this.http.get<Work>(GETONEWORKS+id);
  }
}
