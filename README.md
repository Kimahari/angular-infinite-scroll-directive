# Angular Infinite Scroll Directive

[![Build Status](https://github.com/Kimahari/angular-infinite-scroll-directive/actions/workflows/test-angular.yml/badge.svg)](https://github.com/Kimahari/angular-infinite-scroll-directive/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A proof-of-concept Angular project demonstrating an infinite scroll directive using [perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar).

## Features

- Infinite scrolling for lists and grids
- Custom Angular directive for easy integration
- Uses [perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar) for enhanced scrollbars
- Unit and E2E tests included
- CI/CD with GitHub Actions

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.x recommended)
- [Angular CLI](https://angular.io/cli)

### Installation

```sh
git clone https://github.com/<your-username>/angular-infinite-scroll-directive.git
cd angular-infinite-scroll-directive
npm install
```

### Running the App

```sh
npm start
```

Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Running Tests

```sh
npm test
```

### Building for Production

```sh
npm run build
```

## Usage

Import and use the infinite scroll directive in your Angular components.  
See the source code for example usage.

## Usage Example

```html
<div
  appInfiniteScroller
  [scrollCallback]="loadMore"
  [scrollPercent]="80"
  (scrolled)="onScrolled()"
  style="height: 400px; overflow: auto;"
>
  <!-- Your list here -->
</div>
```

```typescript
loadMore = () => this.dataService.fetchNextPage();
onScrolled() {
  // Optional: handle scroll event
}
```

## Deployment

This project uses GitHub Actions for CI/CD and can be deployed to GitHub Pages:

```sh
npm run deploy
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
