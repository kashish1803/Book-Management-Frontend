import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/token-interceptor';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { BookList } from './books/book-list/book-list';
import { AddBook } from './books/add-book/add-book';
import { EditBook } from './books/edit-book/edit-book';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { FilterBooksPipe } from './shared/filter-books-pipe';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    BookList,
    AddBook,
    EditBook,
    Navbar,
    Footer,
    FilterBooksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
