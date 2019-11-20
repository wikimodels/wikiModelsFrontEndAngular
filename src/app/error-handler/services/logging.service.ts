import { Injectable } from '@angular/core';
import { SlackService } from './slack.service';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
  constructor(private slackService: SlackService) { }

  logError(message: string, stack: string) {
    // Send errors to be saved here
    // The console.log is only for testing this example.
    console.log('LOGGING SERVICE MESSAGE: ' + message);
    console.log('LOGGING SERVICE STACK: ' + stack);
    
    this.slackService.postErrorOnSlack(message, stack);
  }
}
