import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public base_url: string = environment.base_url;
  get header() {
    return {
      headers: {
        'x-access-token': `${localStorage.getItem('token')}`
      }
    }
  } 

  constructor(private http: HttpClient) { }

  createOperation(data:{}){
    const url = `${this.base_url}/operations/create`;
     return this.http.post(url, data, this.header)
  }
  getClientOperations(client_id:string){
    const url = `${this.base_url}/operations/getforclientid/${client_id}`;
     return this.http.get(url , this.header);
  }

  getOperationCarries(id:string){
    const url = `${this.base_url}/carries/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  newOperationCarrie(data:{}){
    const url = `${this.base_url}/carries/create`;
    return this.http.post(url, data, this.header);
  }

  getOperationsDischarges(id:string){
    const url  = `${this.base_url}/discharges/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  createDischarge(data:{}){
    const url = `${this.base_url}/discharges/create`;
    return this.http.post(url, data, this.header);
  }

  createRemovable(data:{}){
    const url = `${this.base_url}/removables/create`;
    return this.http.post(url, data, this.header);
  }

  getOperationRemovables(id:string){
    const url = `${this.base_url}/removables/getforoperationid/${id}`;
      return  this.http.get(url, this.header);
  }

  createFactualStatus(data:{}){
    const url = `${this.base_url}/factualstatus/create`;
    return this.http.post(url, data, this.header);
  }

  getOperationFactualState(id:string){
    const url = `${this.base_url}/factualstatus/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  createDispatch(data:{}){
    const url = `${this.base_url}/dispatches/create`;
    return this.http.post(url, data, this.header);
  }

  getOperationDispatches(id:string){
    const url = `${this.base_url}/dispatches/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  newTurn(data:{}){
    const url = `${this.base_url}/rcc/create`;
    return this.http.post(url, data, this.header);
  }

  getOperationRcc(id:string){
    const url = `${this.base_url}/rcc/getforoperationid/${id}`;
    return  this.http.get(url, this.header);
  }

  getEmployeeTurns(oid:string, eid:string){
    const url = `${this.base_url}/rcc/getforemployeeidandoperationid/${oid}/${eid}`;
      return this.http.get(url, this.header);
  }

  updateTurnAdmin(data:{}, id:string){
    const url = `${this.base_url}/rcc/admin/update/${id}`;
     return this.http.put(url, data, this.header);
  }

  createEvidence(data:FormData){
    const url = `${this.base_url}/evidences/create`;
    return this.http.post(url, data, this.header)
  }

  getEvidences(id:string){
    const url = `${this.base_url}/evidences/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  getTurnsForEmployeeId(eid:string, oid:string){
    const url = `${this.base_url}/rcc/getturnsforemployeeidandoperationid/${oid}/${eid}`;
    return this.http.get(url, this.header);
  }

  getTurnsOperation(oid:string){
    const url = `${this.base_url}/rcc/getturnsforoperationid/${oid}`;
    return this.http.get(url, this.header);
  }

  getDailyOperationReport(oid:string, date:string){
      const url = `${this.base_url}/rcc/getturnsday/${oid}/${date}`;
      return this.http.get(url, this.header);
  }

  facturactionOperation(oid:string){
    const url = `${this.base_url}/rcc/getturnsforoperationid/${oid}`;
    return this.http.get(url, this.header);
  }

  createReport(data:{}){
    const url = `${this.base_url}/reports/create`;
    return this.http.post(url, data, this.header);
  }
  getAllReportForOperation(id:string){
    const url = `${this.base_url}/reports/getforoperationid/${id}`;
    return this.http.get(url, this.header);
  }

  UpdateReport(oid:string, data:{}){
    const url = `${this.base_url}/reports/update/${oid}`;
    return this.http.put(url, data, this.header);
  }


}
