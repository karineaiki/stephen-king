import { Component, inject } from '@angular/core';
import { Books } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { ApiBooksService } from '../services/api-books.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  bookId: string | null = null;
  bookDetails: Books | null = null;

  constructor(private apiBookServiceInjected : ApiBooksService, private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('bookId');

      if (this.bookId !== null) {
        this.apiBookServiceInjected.getBookByKey(this.bookId)
          .then((response) => this.bookDetails = response)
      }
    })
  }
}