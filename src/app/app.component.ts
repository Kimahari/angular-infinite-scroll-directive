import { Component, ElementRef } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { tap } from 'rxjs/operators';
import { PerfectScrollbarConfigInterface } from './modules/ngx-perfect-scrollbar/perfect-scrollbar.interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'infinite-scroller-poc';

  currentPage = 1;

  news: Array<any> = [];

  scrollCallback;
  version = '';

  config: PerfectScrollbarConfigInterface = {};

  constructor(private service: HackerNewsService, private ref: ElementRef) {
    this.scrollCallback = this.getStories.bind(this);
    const html = ref.nativeElement as HTMLElement;
    this.version = html.attributes['ng-version'].value;
  }

  getStories() {
    return this.service
      .getLatestStories(this.currentPage)
      .pipe(tap(this.processData.bind(this)));
  }

  private processData(news: any[]) {
    console.log('here is am 2', news);

    this.currentPage++;
    this.news = this.news.concat(news);
  }
}
