import {
  Directive,
  Input,
  ElementRef,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { Observable, fromEvent, pipe, Subscription } from 'rxjs';

import { map, pairwise, filter, startWith, exhaustMap } from 'rxjs/operators';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
}

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0,
};

@Directive({
  selector: '[appInfiniteScroller]',
})
export class InfiniteScrollerDirective implements AfterContentInit, OnDestroy {
  private scrollEvent$: Observable<MouseEvent>;

  private userScrolledDown$: Observable<any>;

  private requestStream$: Observable<any>;

  private requestOnScroll$: Observable<any>;
  requestOnScrollSubscription: Subscription;

  constructor(private elm: ElementRef) { }

  @Input()
  scrollCallback;

  @Input()
  immediateCallback;

  @Input()
  scrollPercent = 70;

  ngAfterContentInit() {
    this.registerScrollEvent();
  }

  ngOnDestroy() {
    if (this.requestOnScrollSubscription) {
      this.requestOnScrollSubscription.unsubscribe();
      this.requestOnScrollSubscription = null;
    }
  }

  private registerScrollEvent() {
    this.scrollEvent$ = fromEvent(this.elm.nativeElement, 'scroll');
    this.streamScrollEvents();
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$.pipe(
      map(
        (scrollData) =>
        ({
          cH: (scrollData.target as HTMLElement).clientHeight,
          sH: (scrollData.target as HTMLElement).scrollHeight,
          sT: (scrollData.target as HTMLElement).scrollTop,
        } as ScrollPosition)
      ),
      pairwise(),
      filter(
        (positions) =>
          this.isUserScrollingDown(positions) &&
          this.isScrollExpectedPercent(positions[1])
      )
    );

    this.requestCallbackOnScroll();
  }

  private requestCallbackOnScroll() {
    this.requestOnScroll$ = this.userScrolledDown$;

    if (!this.requestOnScroll$) {
      console.warn('failed to bind scroll callback.');
      return;
    }

    if (this.immediateCallback) {
      this.requestOnScroll$ = this.requestOnScroll$.pipe(
        startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION])
      );
    }

    this.requestOnScrollSubscription = this.requestOnScroll$
      .pipe(exhaustMap(() => this.scrollCallback && this.scrollCallback()))
      .subscribe(() => { });
  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return (position.sT + position.cH) / position.sH > this.scrollPercent / 100;
  }
}
