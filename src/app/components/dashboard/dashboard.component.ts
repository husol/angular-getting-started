import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  stories: Story[] = [];
  loading: boolean;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.loading = true;
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
        .subscribe(res => {
          this.loading = false;
          this.stories = res.result.stories.slice(1, 5);
        });
  }
}
