# Infinite Scroller Poc

A demo Angular application that showcases an infinite scrolling directive integrated with Perfect Scrollbar. The app fetches stories from the Hacker News API as you scroll.

[![Update Angular](https://github.com/Kimahari/angular-infinite-scroll-directive/actions/workflows/update-angular.yml/badge.svg)](https://github.com/Kimahari/angular-infinite-scroll-directive/actions/workflows/update-angular.yml)

[![CI](https://github.com/Kimahari/angular-infinite-scroll-directive/actions/workflows/test-angular.yml/badge.svg?branch=master)](https://github.com/Kimahari/angular-infinite-scroll-directive/actions/workflows/test-angular.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7f91b25-2110-48f8-9243-96b3c63676e8/deploy-status)](https://app.netlify.com/sites/angular-infinite-scroll-poc/deploys)

## Features

- **Angular 19** – The project began on Angular 9 but is automatically kept current using GitHub Actions.
- **Custom `InfiniteScrollerDirective`** – Emits a callback when scrolling past a configurable percentage.
- **Perfect Scrollbar integration** – Provides nicer scrollbars via a small wrapper module.
- **Hacker News service** – Demonstrates loading data from `node-hnapi.herokuapp.com`.

## Getting started

1. Install dependencies with `npm install`.
2. Run a development server using `npm start` (or `ng serve`) and open `http://localhost:4200/`.
3. Execute tests via `npm test`.
4. Build for production with `npm run build -- --configuration production`.

### Using the directive

```html
<ul
  appInfiniteScroller
  [scrollCallback]="loadMore"
  scrollPercent="70"
  immediateCallback="true"
>
  <li *ngFor="let item of items">{{ item.title }}</li>
</ul>
```

## Contributing

Pull requests are welcome. Continuous integration will lint, build, test and keep Angular up to date.
