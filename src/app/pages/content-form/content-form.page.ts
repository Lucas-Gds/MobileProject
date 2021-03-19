import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user'
import { Topic } from 'src/app/models/topic';
import { Comments } from 'src/app/models/comments';
import { LoadingsService } from 'src/app/services/loadings.service';
import { ContentService } from 'src/app/services/content.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.page.html',
  styleUrls: ['./content-form.page.scss'],
})
export class ContentFormPage implements OnInit {
  public idUser: User = null;
  public topic: Topic = new Topic;
  public comment: Comments = new Comments;
  public

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:LoadingsService,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.verfUserIdForTopic()
  }

  async ionViewWillEnter() {
    await this.verfUserIdForTopic()
    }
    ionViewWillLeave() {
     this.idUser = null;
    }
    verfUserIdForTopic(){
      this.idUser = this.appComponent.user
      this.idUser.id = this.appComponent.id
    }
CreateTopic(form){
  {
      this.msg.presentLoading();
    this.topic.idUser = this.idUser.id;
    this.topic.active = true;
    this.topic.date = new Date();
    this.contentService.add(this.topic).then(async res => {
      form.reset;
      this.msg.dismissLoading();
      this.msg.presentAlert("","Topico criado");
      this.topic = null;
      this.router.navigate(["/"]);
    }, async err => {
      this.msg.presentAlert("Error", "não foi possível criar um tópico");
      this.router.navigate(["/"]);
    });
  }
}
}
