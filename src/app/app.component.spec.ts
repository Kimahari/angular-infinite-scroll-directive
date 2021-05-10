import { AppComponent } from "./app.component";
import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { HttpClient } from "@angular/common/http";

describe("nameComponent", () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [HttpClient],
  });

  beforeEach(() => (spectator = createComponent()));

  it("should create the app", () => {
    expect(spectator.component).toBeTruthy();
  });
});
