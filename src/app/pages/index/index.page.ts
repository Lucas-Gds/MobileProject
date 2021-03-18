import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LoadingsService } from 'src/app/services/loadings.service';
import { ActionSheetController } from '@ionic/angular';
import { Topic } from 'src/app/models/topic'
import { ContentService } from 'src/app/services/content.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public id: string = null;
  public userForindex: User = null;
  public topics: Topic[] = [];
  constructor(
    private userService: UserService,
    private router:Router,
    private msg:LoadingsService,
    private contService: ContentService
  ) { }

  async ngOnInit() {
    this.contService.gerarTodos().subscribe(
      resultado => {
        this.topics = resultado;
      }
      )
   }

   async ionViewWillEnter() {
  await this.verfUser()
  }
  ionViewWillLeave() {
   this.userForindex = null;
  }
   async verfUser() {
     await this.userService.auth.user.subscribe(
       res => {
         if (res)
         this.id = res.uid;
           this.userService.get(res.uid).subscribe(
             res => {
               this.userForindex = res;
             }
           )
       },
       err => {
         this.userForindex = null
       }
     )
   }
}
