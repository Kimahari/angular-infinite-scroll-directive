import { AppComponent } from "./app.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { InfiniteScrollerDirective } from "./infinite-scroller.directive";

describe("nameComponent", () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [InfiniteScrollerDirective],
    declarations: [],
    providers : [provideHttpClientTesting()]
  });

  beforeEach(() => (spectator = createComponent()));

  it("should create the app", () => {
    expect(spectator.component).toBeTruthy();
  });
});
