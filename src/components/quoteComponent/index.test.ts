class MockQuoteService {

  getQuote() {
    return new Promise((resolve, reject) => {
      resolve('Test quote');
    });
  }
}

import {QuoteService} from './quote.service';
import {QuoteComponent} from './index';
import { provide } from '@angular/core';
import {
  async,
  expect,
  it,
  describe,
  inject,
  beforeEachProviders,
  beforeEach,
} from '@angular/core/testing';

import {
  TestComponentBuilder,
  ComponentFixture,
}
from '@angular/compiler/testing';

describe('Testing Quote Component', () => {

  beforeEachProviders(() => [
    provide(QuoteService, { useClass: MockQuoteService })
  ]);

  it('Should get quote',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(QuoteComponent).then(fixture => {

        fixture.componentInstance.getQuote();

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('div')).toHaveText('Test quote');
        });
      });
    }))
  );
});
