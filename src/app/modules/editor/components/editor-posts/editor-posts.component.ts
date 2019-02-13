import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
 
export interface Post {title: string; content: string; }
 
@Component({
  selector: 'app-editor-posts',
  templateUrl: './editor-posts.component.html',
  styleUrls: ['./editor-posts.component.css']
})
export class EditorPostsComponent implements OnInit {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;
  postTitle: string;
 
  constructor( private afs: AngularFirestore) {
    this.postTitle ='';
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
   }
 
  ngOnInit() {
  }
 
  onEnter() {
    const post: Post = {title: this.postTitle, content: ''};
    var _this = this;
    this.addItem(post, (function() {
      return function(data) {
        _this.postTitle = ''; // empty dom input
        alert('New Post Added');
        // TODO: Redirect to post with post id
      };
    })() );
    // If post request is successful: clear input; notify user
  }
 
  addItem(post: Post, successCb?, errCb?) {
    // TODO: Implement loading Animation
    this.postsCollection.add(post).then(data => {
      successCb(data);
    }).catch(err => {
      if (errCb) {
        errCb(err);
      } else {
        console.log(post)
        console.log(err);
      }
    });
  }
}