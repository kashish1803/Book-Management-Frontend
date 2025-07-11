import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { BookList } from './books/book-list/book-list';
import { AddBook } from './books/add-book/add-book';
import { AuthGuard } from './core/auth-guard';
import { EditBook } from './books/edit-book/edit-book';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'books',
    component: BookList,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/add',
    component: AddBook,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/edit/:isbn',
    component: EditBook,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'books' }  // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
