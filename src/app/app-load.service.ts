import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppLoadService {

    private configurations: any;

    constructor(private httpClient: HttpClient) { }

    getConfigurations(): any {
        return this.configurations;
    }

    load() {
        return new Promise((resolve, reject) => {
            this.httpClient.get('https://api.github.com/').subscribe(
                response => {
                    this.configurations = response;
                    resolve(true);
                }, error => {
                    this.configurations = {}; // Fallback
                    resolve(true);
                });
        });
    }
}