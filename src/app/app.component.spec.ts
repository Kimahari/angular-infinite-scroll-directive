import { AppComponent } from "./app.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { HttpClient } from "@angular/common/http";
import { InfiniteScrollerDirective } from "./infinite-scroller.directive";

describe("nameComponent", () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [HttpClient],
    declarations: [InfiniteScrollerDirective],
  });

  beforeEach(() => (spectator = createComponent()));

  it("should create the app", () => {
    expect(spectator.component).toBeTruthy();
  });
});
