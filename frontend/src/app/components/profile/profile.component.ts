import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/ServiceTwitter/twitter.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  myTimeline: any = null;

  constructor(private api: TwitterService) {}

  ngOnInit() {
    this.getTwitterTimeline();
  }

  async getTwitterTimeline(): Promise<void> {
    await this.api.getTimeline().then(response => {
      console.log(response.data);
      this.myTimeline = response.data;
    });
  }

}
