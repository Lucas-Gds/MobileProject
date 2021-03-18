import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private ColletionTopic: any ="topicos";
  constructor(
    private fireDB: AngularFirestore
  ) { }

  add(topico: Topic) {
    return this.fireDB.collection(this.ColletionTopic).add(
      {
        
        title: topico.title,
        content: topico.content,
        active: topico.active,
        date: new Date().getTime(),
        idUserCreatedTopic: topico.IdUsercreateTopic,
      }
    );
  }
  gerarTodos() {
    return this.fireDB.collection<Topic>(this.ColletionTopic).snapshotChanges()
      .pipe(
        map(
          dados => dados.map(d => ({ id: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id:string){
    return this.fireDB.collection(this.ColletionTopic).doc<Topic>(id).valueChanges();
  }
  att(Topic:Topic, id:string){
    return this.fireDB.collection(this.ColletionTopic).doc(id).update(Topic);
  }
  remove(id:string){
    return this.fireDB.collection(this.ColletionTopic).doc(id).delete();
  }
  // updatePhoto(id:string,index:number,fotos:string[]){
  //   return this.fireDB.collection(this.ColletionTopic).doc(id).update({
  //     galeria:fotos,
  //     foto:index
  //   })
 
  // }
}
