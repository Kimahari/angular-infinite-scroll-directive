import {
  Directive,
  ElementRef,
  Input,
  AfterContentInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable, Subscription, fromEvent, of } from 'rxjs';
import { map, pairwise, filter, throttleTime, switchMap, startWith } from 'rxjs/operators';

/**
 * InfiniteScrollerDirective
 * Adds infinite scroll behavior to a scrollable element.
 */
@Directive({
  selector: '[appInfiniteScroller]',
  standalone: false
})
export class InfiniteScrollerDirective implements AfterContentInit, OnDestroy, OnChanges {
  private scrollEvent$: Observable<Event>;
  private requestOnScrollSubscription?: Subscription;

  @Input() scrollCallback!: () => Observable<any>;
  @Input() immediateCallback = false;
  @Input() scrollPercent = 70;
  @Input() scrollContainer?: HTMLElement; // Optional custom container

  @Output() scrolled = new EventEmitter<void>();

  constructor(private readonly elm: ElementRef) {}

  ngAfterContentInit(): void {
    this.registerScrollEvent();
    if (this.immediateCallback) {
      this.triggerCallback();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scrollCallback'] && !changes['scrollCallback'].firstChange) {
      this.registerScrollEvent();
    }
  }

  ngOnDestroy(): void {
    this.requestOnScrollSubscription?.unsubscribe();
  }

  /**
   * Registers the scroll event and sets up the infinite scroll logic.
   */
  private registerScrollEvent(): void {
    this.requestOnScrollSubscription?.unsubscribe();

    const container = this.scrollContainer || this.elm.nativeElement;
    this.scrollEvent$ = fromEvent(container, 'scroll');

    this.requestOnScrollSubscription = this.scrollEvent$
      .pipe(
        throttleTime(100),
        map(() => this.calculateScrollPercent(container)),
        pairwise(),
        filter(([prev, curr]) => curr > prev && curr > this.scrollPercent)
      )
      .subscribe(() => {
        this.triggerCallback();
      });
  }

  /**
   * Calculates the current scroll percent.
   */
  private calculateScrollPercent(container: HTMLElement): number {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    return ((scrollTop + clientHeight) / scrollHeight) * 100;
  }

  /**
   * Triggers the scroll callback and emits the scrolled event.
   */
  private triggerCallback(): void {
    if (typeof this.scrollCallback === 'function') {
      this.scrollCallback().subscribe({
        next: () => this.scrolled.emit(),
        error: (err) => console.error('InfiniteScrollerDirective callback error:', err)
      });
    } else {
      console.warn('InfiniteScrollerDirective: scrollCallback is not a function');
    }
  }
}
