import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { LoadingsService } from 'src/app/services/loadings.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
   public id: string = null;
   public user: User = new User;
  // public preview: string = null;

  constructor(
    private userService: UserService,
    private router:Router,
    private msg:LoadingsService
  ) { }

  
  async ngOnInit() {
    await this.verfUser();
  }
  async verfUser() {
    await this.userService.auth.user.subscribe(
      res => {
        if (res)
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
  RecoveryPass(email : string){
    this.userService.auth.sendPasswordResetEmail(
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
  // async ProfileUser() {
  //  this.id =(await this.userService.auth.currentUser).uid;
  //   if (this.id) {
  //     this.userService.get(this.id).subscribe(
  //       res => {
  //         this.user = res
  //       }
  //     )
    //}} else {
    //   (await this.userService.auth.currentUser).uid
    //   await this.userService.auth.user.subscribe(
    //     res => {
    //       this.id = res.uid
    //       this.userService.get(this.id).subscribe(
    //         res => {
    //           this.user = res
    //         }
    //         )
    //       }
    //       )
    //     }
    //   }

      // tirarFoto() {
      //   const options: CameraOptions = {
      //     quality: 50,
      //     destinationType: this.camera.DestinationType.DATA_URL,
      //     encodingType: this.camera.EncodingType.JPEG,
      //     mediaType: this.camera.MediaType.PICTURE
      //   }
    
      //   this.camera.getPicture(options).then(
      //     (imageData) => {
      //       // imageData is either a base64 encoded string or a file URI
      //       // If it's base64 (DATA_URL):
      //       this.preview = 'data:image/jpeg;base64,' + imageData;
      //       this.user.= this.preview;
      //       //console.log(this.usuario.foto);
      //       this.msg.presentLoading();
      //       this.userService.updatePhoto(this.id, this.user.foto).then(
      //         () => {
      //           this.msg.dismissLoading()
      //         }
      //       )
      //     }, (err) => {
      //       // Handle error
      //       console.log("Camera issue: " + err);
      //     }
      //   );
      // }
      // escolherFoto(){
      //   const options: CameraOptions = {
      //     quality: 50,
      //     destinationType: this.camera.DestinationType.FILE_URI,
      //     encodingType: this.camera.EncodingType.JPEG,
      //     mediaType: this.camera.MediaType.PICTURE,
      //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      //   }
    
      //   this.camera.getPicture(options).then(
      //     (imageData) => {
      //       // imageData is either a base64 encoded string or a file URI
      //       // If it's base64 (DATA_URL):
      //       this.preview = 'data:image/jpeg;base64,' + imageData;
      //       this.usuario.foto = this.preview;
      //       //console.log(this.usuario.foto);
      //       this.msg.presentLoading();
      //       this.usuarioService.updatePhoto(this.id, this.usuario.foto).then(
      //         () => {
      //           this.msg.dismissLoading()
      //         }
      //       )
      //     }, (err) => {
      //       // Handle error
      //       console.log("Camera issue: " + err);
      //     }
      //   );
      // }
      // async alterarFoto() {
      //   const actionSheet = await this.actionSheetController.create({
      //     header: 'Escolha a origem da imagem.',
      //     cssClass: 'my-custom-class',
      //     buttons: [{
      //       text: 'Camera',
      //       icon: 'camera',
      //       handler: () => {
      //        this.tirarFoto()
      //       }
      //     }, {
      //       text: 'Galeria',
      //       icon: 'image',
      //       handler: () => {
      //         this.escolherFoto()
      //       }
      //     }, {
      //       text: 'Cancelar',
      //       icon: 'close',
      //       role: 'cancel',
      //       handler: () => {
      //         console.log('Cancel clicked');
      //       }
      //     }]
      //   });
      //   await actionSheet.present();
      // }

}
