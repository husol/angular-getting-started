import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        StoriesComponent,
        StoryDetailComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
