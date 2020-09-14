import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TwitterService {
  api_url = "http://localhost:4201";

  constructor(private http: HttpClient) {}

  async getTimeline() {
    return await this.http
      .get<any>(this.api_url + "/lists/statuses")
      .toPromise();
  }
}
