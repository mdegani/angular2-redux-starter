import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import {MessageComponent} from './index';

describe('Testing message state in message component', () => {
  beforeEach(() => {
    this.app = new MessageComponent();
  });

  it('should set new message', () => {
    this.app.setMessage('Testing');
    expect(this.app.message).toBe('Testing');
  });

  it('should clear message', () => {
    this.app.clearMessage();
    expect(this.app.message).toBe('');
  });
});
