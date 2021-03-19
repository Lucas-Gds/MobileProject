import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user'
import { Topic } from 'src/app/models/topic';
import { Comments } from 'src/app/models/comments';
import { LoadingsService } from 'src/app/services/loadings.service';
import { ContentService } from 'src/app/services/content.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menssage',
  templateUrl: './menssage.page.html',
  styleUrls: ['./menssage.page.scss'],
})
export class MenssagePage implements OnInit {

  public id: string = null;
  public currentUser: User = new User();
  public userPost: User = new User();
  public topics: Topic[] = [];
  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:LoadingsService,
    private userService: UserService,
    
  ) { }

  ngOnInit() {
    this.contentService.gerarTodos().subscribe(
      resultado => {
        this.topics = resultado;
      }
      )
  }
  ionViewWillEnter() {
    this.verfUser();

  }
  ionViewWillLeave() {
    this.currentUser = null;
    this.id = null;
   }
  async verfUser() {
    await this.userService.auth.user.subscribe(
      res => {
        this.id = res.uid;
        if (res)
          this.userService.get(res.uid).subscribe(
            res => {
              this.currentUser = res;
              this.currentUser.id = this.id;
            } 
          )
      },
      err => {
        this.currentUser = null
      }
    )
  }

}
