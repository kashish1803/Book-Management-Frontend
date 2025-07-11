import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: false,
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css'
})
export class EditBook implements OnInit {
  isbn: string = '';
  book: Book = {
    isbn: '',
    title: '',
    author: '',
    publicationYear: new Date().getFullYear()
  };

  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';
    if (this.isbn) {
      this.bookService.getBookByIsbn(this.isbn).subscribe({
        next: (data) => this.book = data,
        error: () => this.errorMessage = 'Book not found'
      });
    }
  }

  onSubmit() {
    this.bookService.updateBook(this.isbn, this.book).subscribe({
      next: () => {
        this.successMessage = 'Book updated successfully';
        setTimeout(() => this.router.navigate(['/books']), 1000);
      },
      error: () => this.errorMessage = 'Failed to update book'
    });
  }
}
