import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LoadingsService } from 'src/app/services/loadings.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public id: string = null;
  public user: User = new User;
  public nome: string = "Usuário";
  public preview: string = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public msg: LoadingsService,
    public actionSheetController:ActionSheetController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.verfUser()
  }

  async verfUser() {
    await this.userService.auth.user.subscribe(
      res => {
        if (res)
          this.userService.get(res.uid).subscribe(
            res => {
              this.user = res;
              console.log(res);
            }
          )
      },
      err => {
        this.user = null
      }
    )
  }
  logout() {
  //  this.user = null;
    this.userService.auth.signOut().then(
      () => this.router.navigate(["/"])
    ) 
  }
}
