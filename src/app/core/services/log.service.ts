import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class LogService {
    constructor(private apiService: ApiService, private router: Router) {}
    getAll({ pageSize, pageNo }) {
        const params = new HttpParams()
            .set('pageSize', pageSize || 15)
            .set('pageNo', pageNo || 1);
        return this.apiService.get('/log', params);
    }
}
