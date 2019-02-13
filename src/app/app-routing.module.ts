import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EditorAuthGuard } from './guards/editor-auth.guard';
import {AuthComponent} from './components/auth/auth.component';

const routes: Routes = [

  {
    path: 'auth',
    children: [
      { path: 'login', component: AuthComponent},
      { path: 'logout', component: AuthComponent}
    ]
  },

  {
    path: '',
    loadChildren: './modules/reader/reader.module#ReaderModule'
  },
  {
    path: 'editor',
    loadChildren: './modules/editor/editor.module#EditorModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EditorAuthGuard]
})
export class AppRoutingModule { }
