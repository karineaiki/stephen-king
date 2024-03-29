import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
    { path: '', component: BookListComponent },
    { path: 'book-details/:bookId', component: BookDetailsComponent },
];
