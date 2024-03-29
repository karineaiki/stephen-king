import { Component } from '@angular/core';
import { Books } from '../interfaces/books';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiBooksService } from '../services/api-books.service';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent {
  bookList: Books[] = [] ;

  constructor(private apiBookService: ApiBooksService) {}

  ngOnInit(){
    this.apiBookService.getAllBooks()
      .subscribe((response) => this.bookList = response.entries)
  }
}