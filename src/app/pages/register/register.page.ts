import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { LoadingsService } from 'src/app/services/loadings.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public id: string = null;
  public user:User = new User;
  public conf:string = "";

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private msg:LoadingsService
    ) { }

  ngOnInit() {
  }
  onSubmit(form) {
    //console.log(this.usuario);
    console.log(form);
    if (form.valid) {
      this.msg.presentLoading()
      if (!this.id) {
        this.userService.add(this.user).then(
          res => {
            console.log("Cadastrado!", res);
            form.reset();
            this.user = new User; // this.usuarios = []
            this.msg.presentAlert("Aviso", "Usuario cadastrado!");
            this.msg.dismissLoading();
            this.router.navigate([""]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Usuario não cadastrado!");
          }
        ).finally(
          ()=> this.msg.dismissLoading()
        )
      }
    }
  }
}
