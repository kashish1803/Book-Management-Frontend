import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks',
  standalone: false
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: any[], searchText: string): any[] {
    if (!books || !searchText) return books;

    const lowerSearch = searchText.toLowerCase();

    return books.filter(book =>
      book.title?.toLowerCase().includes(lowerSearch) ||
      book.author?.toLowerCase().includes(lowerSearch) ||
      book.isbn?.toString().includes(lowerSearch) ||
      book.publicationYear?.toString().includes(lowerSearch)
    );
  }
}
