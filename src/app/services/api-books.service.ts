import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../interfaces/books';

type BookList = {
  entries: Books[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {
  URL_API = 'https://openlibrary.org/authors/OL2162284A/works.json?limit=100';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<BookList> {
    return this.httpClient.get<BookList>(this.URL_API);
  }
  
  getBookByKey(bookKey:string): Promise<Books> {
    return fetch('https://openlibrary.org'+ bookKey + '.json')
      .then((response) => response.json())
      .then((response: Books) => response);
  }
}