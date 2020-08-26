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

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
        .subscribe((data: any) => {
          this.stories = data.result.stories.slice(1, 5)
        });
  }
}