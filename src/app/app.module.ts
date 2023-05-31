import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent
  ],
  //browser module information
  //ng module insert in FormsModule
  imports: [BrowserModule , FormsModule],
  // root module first ever component to load
  bootstrap: [AppComponent]
})
export class AppModule {}
