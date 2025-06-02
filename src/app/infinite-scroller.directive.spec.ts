import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';

describe('InfiniteScrollerDirective', () => {
  let directive: InfiniteScrollerDirective;
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    directive = new InfiniteScrollerDirective(new ElementRef(element));
    directive.scrollCallback = () => of(true);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  // Add more tests for scroll behavior, callback, etc.
});
