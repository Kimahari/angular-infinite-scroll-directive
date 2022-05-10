import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { tap } from 'rxjs/operators';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'infinite-scroller-poc';

  currentPage = 1;

  news: Array<any> = [];

  scrollCallback;

  config: PerfectScrollbarConfigInterface = {};

  constructor(private service: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
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
