import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingsService } from 'src/app/services/loadings.service';
import { UserService } from 'src/app/services/user.service';
import { Platform } from '@ionic/angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:string = "";
  public senha:string = "";
  public isApp:boolean;

  constructor(
    public usuarioService:UserService,
    private router:Router,
    private msg:LoadingsService,
    public platform: Platform
    ) { 
      // this.platform.ready().then(() => {
      //  this.testPlatform();
      // });
      platform.ready().then((readySource) => {
        console.log('Width: ' + platform.width());
        console.log('Height: ' + platform.height());
    });
  }

  ngOnInit() {
  }
  // testPlatform(){
  //   if(this.platform.is('mobile') || this.platform.is('mobileweb')) {
  //     this.isApp = false;
  //     console.log(this.isApp);
  //   } else if (this.platform.is('') || this.platform.is('ipad')){
  //     this.isApp = true;
  //     console.log(this.isApp);
  //   }
  // }
  onSubmit(form){
    this.usuarioService.auth.signInWithEmailAndPassword(this.email, this.senha).then(
      res=>{
        res.user.uid;
        this.router.navigate(["/"]);
      },
      err=>{
        form.reset();
        console.log("Erro login:", err);
        this.msg.presentAlert("Erro", "E-mail ou senha invalidos! Usuário não localizado!");
      }
    )
  }
  RecoveryPass(email : string){
    this.usuarioService.auth.sendPasswordResetEmail(
      email,
      {url: 'http://localhost:8100'}
      
    ).then(
      ()=>{
        this.msg.presentAlert("Sucesso", "E-mail de recuperação enviado para sua caixa de mensagens");
        this.router.navigate(["/perfil"]);
      },
      err=>{
        console.log("Erro de recuperação:", err);
        this.msg.presentAlert("Erro", "E-mail invalido! Usuário não localizado!");
      }
    );
      
    }
}
