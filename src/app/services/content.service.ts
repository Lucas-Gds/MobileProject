import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comments } from '../models/comments';
import { Topic } from '../models/topic';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private ColletionTopic: any ="topics";
  private ColletionComment: any = "comentarios";
  constructor(
    private fireDB: AngularFirestore
  ) { }

  add(topico: Topic) {
    return this.fireDB.collection(this.ColletionTopic).add(
      {
  
        title: topico.title,
        active: topico.active,
        date: new Date().getTime(),
        idUser: topico.idUser,
      }
    
    );
  }
  addComment(comment: Comments) {
    return this.fireDB.collection(this.ColletionComment).add(
      {
        idtopic: comment.idtopic,
        idUser: comment.idUser,
        comment: comment.comment,
      }
    );
  }
  
  getComments(){
    return this.fireDB.collection<Comments>(this.ColletionComment).snapshotChanges().pipe(
      map(
        dados => dados.map(d => ({ id: d.payload.doc.id, ...d.payload.doc.data() }))
      ))
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
  // att(Topic:Topic, id:string){
  //   return this.fireDB.collection(this.ColletionTopic).doc(id).update(Topic);
  // }
  // remove(id:string){
  //   return this.fireDB.collection(this.ColletionTopic).doc(id).delete();
  // }
  // updatePhoto(id:string,index:number,fotos:string[]){
  //   return this.fireDB.collection(this.ColletionTopic).doc(id).update({
  //     galeria:fotos,
  //     foto:index
  //   })
 
  // }
}
