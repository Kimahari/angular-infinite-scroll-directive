import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { waitForAsync } from "@angular/core/testing";

describe('InfiniteScrollerDirective', () => {
  it('should create an instance', waitForAsync(() => {
    const directive = new InfiniteScrollerDirective(null);
    expect(directive).toBeTruthy();
  }));
});
