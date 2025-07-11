import { Component } from '@angular/core';
import { Book, BookService } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook {
      book: Book = {
      isbn: '',
      title: '',
      author: '',
      publicationYear: new Date().getFullYear()
    };
  
    errorMessage = '';
    successMessage = '';
  
    constructor(private bookService: BookService, private router: Router) {}
  
    onSubmit() {
      this.errorMessage = '';
      this.successMessage = '';
  
      this.bookService.addBook(this.book).subscribe({
        next: () => {
          this.successMessage = 'Book added successfully';
          setTimeout(() => this.router.navigate(['/books']), 1000);
        },
        error: () => {
          this.errorMessage = 'Failed to add book. ISBN may already exist.';
        }
      });
    }
  
}
