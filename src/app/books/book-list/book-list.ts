import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})

export class BookList implements OnInit {
  books: Book[] = [];
  error: string = '';
  searchText: string = '';

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => this.error = 'Failed to load books'
    });
  }

  onDelete(isbn: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(isbn).subscribe({
        next: () => this.loadBooks(),
        error: () => this.error = 'Failed to delete book'
      });
    }
  }

  onEdit(isbn: string) {
    this.router.navigate(['/books/edit', isbn]);
  }

  onAdd() {
    this.router.navigate(['/books/add']);
  }
}
