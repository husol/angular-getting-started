import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

import {LoaderInterceptor} from './helpers/loader.interceptor';
import {ToastNotificationService} from './services/toast-notification.service';
import {LoaderService} from './services/loader.service';

import {AppComponent} from './app.component';
import {ToastNotificationComponent} from './components/toast-notification/toast-notification.component';
import {LoaderComponent} from './components/loader/loader.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StoriesComponent} from './components/stories/stories.component';
import {StoryDetailComponent} from './components/story-detail/story-detail.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoriesComponent,
    StoryDetailComponent,
    LoaderComponent,
    ToastNotificationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    ToastNotificationService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
