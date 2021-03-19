import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user'
import { Topic } from 'src/app/models/topic';
import { Comments } from 'src/app/models/comments';
import { LoadingsService } from 'src/app/services/loadings.service';
import { ContentService } from 'src/app/services/content.service';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
  
  public id: string = null;
  public id2: string = null;
  public id3: string = null;
  public currentUser: User = new User();
  public userPost: User = new User();
  public topic: Topic = new Topic();
  public comment: Comments = new Comments();
  public comments: Comments[] = [];
 // public comments2: Comments[] = [];

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:LoadingsService,
    private userService: UserService,
  ) { }

  async ngOnInit() {
   await this.getCommentsByid();
   await this.verfUser();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
    await  this.getTopicInfo();
    } else {
       this.router.navigate(["/about"]);
      };
      
  }
  ionViewWillEnter() {
    this.verfUser();
  }
  ionViewWillLeave() {
    this.currentUser = null;
    this.id3 = null;
    this.id2 = null;
    this.id = null;
   }
  async verfUser() {
    await this.userService.auth.user.subscribe(
      res => {
        this.id3 = res.uid;
        if (res)
          this.userService.get(res.uid).subscribe(
            res => {
              this.currentUser = res;
            } 
          )
      },
      err => {
        this.currentUser = null
      }
    )
  }
async getCommentsByid(){
  await  this.contentService.getComments().subscribe(
      resultado => {
        this.comments = resultado;
      }
    )  
  }
  // filterComents(test: string){
  //   test = this.id;
  //   Array.filter
  //   this.comments2.filter(comments2 => this.comments. == test)
  //   )
  // }
 async getTopicInfo(){
    await this.contentService.get(this.id).subscribe(
   async resul => {
        this.topic = resul;
        this.topic.topicId = this.id;
        this.id2 = resul.idUser;
      await  this.userService.get(this.id2).subscribe(
          res => {
            this.userPost = res;
      });
          }
        );
        this.msg.dismissLoading();
      }
      comentar(form) {
        if (form.valid) {
          this.msg.presentLoading()
          this.comment.idUser = this.id3;
          this.comment.idtopic = this.id;
          console.log(this.comment);
            this.contentService.addComment(this.comment).then(
              res => {
                form.reset();
                this.msg.presentAlert("", "Comentário enviado");
                this.msg.dismissLoading();
                this.router.navigate(["/topics/", this.id]);
              },
              err => {
                this.msg.dismissLoading();
                this.msg.presentAlert("Erro:", "Não foi possivel comentar");
              }
            ).finally(
              ()=> this.msg.dismissLoading()
            )
          }
        }
}
