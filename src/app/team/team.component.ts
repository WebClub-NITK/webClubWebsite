import { Component, OnInit } from '@angular/core';
import {
  post_bearers,
  btech_final_years,
  btech_third_years,
  btech_second_years,
  btech_first_years,
  alumni_2k18,
  alumni_2k17,
  alumni_2k16,
  alumni_2k15,
} from './data/team.js';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent{
  public all = {"Post Bearers": post_bearers,
                "Final Years": btech_final_years,
                "Third Years": btech_third_years,
                "Second Years": btech_second_years,
                "First Years": btech_first_years,
                "Alumni 2k18": alumni_2k18,
                "Alumni 2k17": alumni_2k17,
                "Alumni 2k16": alumni_2k16,
                "Alumni 2k15": alumni_2k15,
              }
  public array = this.all["Post Bearers"];
  public title = "OUR TEAM";
  public element = '';
  onClick(e) {
    this.element = e.target.innerHTML;
    this.array = this.all[this.element];
  }
}
