import { Injectable, provide } from '@angular/core';

@Injectable()
export class QuoteService {
  public quote: string = 'Real quote';

  getQuote() {
    return new Promise<string>((resolve, reject) => {
      resolve(this.quote);
    });
  }
}


export var QUOTE_PROVIDERS: Array<any> = [
  provide(QuoteService, { useClass: QuoteService })
];
