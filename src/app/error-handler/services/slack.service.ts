import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SlackService {

private webHook = environment.slackWebHook;
private options = {
    headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
    ) 
};

constructor(
    private http: HttpClient
    ) { }

postErrorOnSlack(errorMessage: string, errorStack: string): void {

    const message = {
        channel: environment.slackAppChannel,
        text: errorMessage,
        attachments: [
            {
                author_name: window.location.href,
                color: 'danger',
                title: 'Trace',
                text: errorStack
            }
        ]
    };

    this.http.post(this.webHook, message, { ...this.options, responseType: 'text' }).subscribe();

  }
}

