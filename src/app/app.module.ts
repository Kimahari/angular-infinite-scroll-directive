import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from './modules/ngx-perfect-scrollbar/perfect-scrollbar.interfaces';
import { PerfectScrollbarModule } from './modules/ngx-perfect-scrollbar/perfect-scrollbar.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({ declarations: [AppComponent, InfiniteScrollerDirective],
    bootstrap: [AppComponent], imports: [BrowserModule, PerfectScrollbarModule], providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
