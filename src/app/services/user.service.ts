import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private colletionUser: any = "users";

  constructor(
    private fireDB: AngularFirestore,
    public auth: AngularFireAuth
  ) { }


  add(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.senha).then(
      res => {
        return this.fireDB.collection(this.colletionUser).doc(res.user.uid).set(
          {
            nome: user.nome,
            email: user.email,
            ativo: user.ativo,
            //senha: usuario.senha
          }
        ).catch(
          () => {
            this.auth.user.subscribe(
              res => res.delete()
            )
          }
        );
      }
    )
  }
  getAll() {
    return this.fireDB.collection<User>(this.colletionUser).snapshotChanges()
      .pipe(
        map(
          dados => dados.map(d => ({ id: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id:string){
    return this.fireDB.collection(this.colletionUser).doc<User>(id).valueChanges();
  }
  updateEmail(userUp : User){
    return this.fireDB.collection(this.colletionUser).doc(userUp.id).update(
      {
        ativo: true,
        email: userUp.email,
        nome: userUp.nome,
      }
    )
  }
  updateName(userUp: User){
    return this.fireDB.collection(this.colletionUser).doc(userUp.id).update(
      {
        ativo: true,
        email: userUp.email,
        nome: userUp.nome,
      }
    )
  }
  remover(id:string){
    return this.fireDB.collection(this.colletionUser).doc(id).delete();
  }
  updatePhoto(id:string, photo:string){
    return this.fireDB.collection(this.colletionUser).doc(id).update(
      {
        foto: photo
      }
    )
  }
}
