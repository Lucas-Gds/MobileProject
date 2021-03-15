import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingsService } from 'src/app/services/loadings.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:string = "";
  public senha:string = "";

  constructor(
    public usuarioService:UserService,
    private router:Router,
    private msg:LoadingsService
    ) { 
    
  }

  ngOnInit() {
  }
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
        this.router.navigate(["/"]);
      },
      err=>{
        console.log("Erro de recuperação:", err);
        this.msg.presentAlert("Erro", "E-mail invalido! Usuário não localizado!");
      }
    );
      
    }
}
