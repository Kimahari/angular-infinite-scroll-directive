import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';

describe('InfiniteScrollerDirective', () => {
  let directive: InfiniteScrollerDirective;
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    Object.defineProperty(element, 'scrollHeight', { value: 1000 });
    Object.defineProperty(element, 'clientHeight', { value: 100 });
    Object.defineProperty(element, 'scrollTop', { value: 800, writable: true });
    directive = new InfiniteScrollerDirective(new ElementRef(element));
    directive.scrollCallback = jasmine.createSpy('scrollCallback').and.returnValue(of(true));
    directive.scrollPercent = 50;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call scrollCallback when scrolled past threshold', fakeAsync(() => {
    directive.ngAfterContentInit();

    // First scroll event: below threshold
    Object.defineProperty(element, 'scrollTop', { value: 400, writable: true }); // 400+100/1000 = 50%
    element.dispatchEvent(new Event('scroll'));
    tick(200);

    // Second scroll event: above threshold
    Object.defineProperty(element, 'scrollTop', { value: 800, writable: true }); // 800+100/1000 = 90%
    element.dispatchEvent(new Event('scroll'));
    tick(200);

    expect(directive.scrollCallback).toHaveBeenCalled();
  }));
});
