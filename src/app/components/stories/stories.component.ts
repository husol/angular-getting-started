import {Component, OnInit} from '@angular/core';
import {Story, ServiceResponse} from '../../models/story';
import {StoryService} from '../../services/story.service';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

    stories: Story[];

    constructor(private storyService: StoryService) {
    }

    ngOnInit(): void {
        this.getStories();
    }

    getStories(): void {
        this.storyService.getStories()
            .subscribe((resp: ServiceResponse) => {
                this.stories = resp.result.stories;
            });
    }
}
