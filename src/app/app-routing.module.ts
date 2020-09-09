import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';
import {AuthComponent} from './components/auth/auth.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StoriesComponent} from './components/stories/stories.component';
import {StoryDetailComponent} from './components/story-detail/story-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign-in'},
  {path: 'sign-in', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'stories', component: StoriesComponent, canActivate: [AuthGuard]},
  {path: 'stories/:id', component: StoryDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
