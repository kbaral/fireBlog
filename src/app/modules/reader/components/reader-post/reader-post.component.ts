import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
  selector: 'app-reader-post',
  templateUrl: './reader-post.component.html',
  styleUrls: ['./reader-post.component.css']
})
export class ReaderPostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument;
  post: any;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }
 
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }
 
}
//<span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvz79zt5amz81zm66z80zz72zcvez79zz79zz90zz79zhz81zz85z4z122z2cpz122z608"></span><br />
//<span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvz79zt5amz81zm66z80zz72zcvez79zz79zz90zz79zhz81zz85z4z122z2cpz122z608"></span>
