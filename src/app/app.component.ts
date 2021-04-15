import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { User } from './models/user';
import { LoadingsService } from './services/loadings.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/index', icon: 'home' },
    { title: 'Sobre Nós', url: '/about', icon: 'archive' },
  ];
  public appLoggedPages = [
    { title: 'Início', url: '/index', icon: 'home' },
    { title: 'Meu Perfil', url: '/perfil', icon: 'build' },
    { title: 'Mensagens', url: '/menssage', icon: 'mail' },
    { title: 'Sobre Nós', url: '/about', icon: 'archive' },
  ];
  public id: string = null;
  public user: User = null;
  public preview: string = null;
  private loadingAlert: void;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public msg: LoadingsService,
    public actionSheetController:ActionSheetController,
  
  ) { }

  async ngOnInit() {
    await this.verfUser();
  }
 
  async verfUser() {
    await this.userService.auth.user.subscribe(
      res => {
        if (res)
        this.id = res.uid;
          this.userService.get(res.uid).subscribe(
            res => {

              this.user = res;
            }
          )
      },
      err => {
        this.user = null
      }
    )
  }
  async logout() {
    await this.msg.presentLoading();
    await this.userService.auth.signOut().then(async () => { 
      
      await this.msg.dismissLoading(); 
      await this.msg.presentLoading();
      this.user = null; 
 //     this.index.userForindex = null;
      await this.msg.dismissLoading(); 
      this.router.navigate(["/about"])
    } )
  }
}
