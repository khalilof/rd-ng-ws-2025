import { Routes } from '@angular/router';
import { WatchListComponent } from './watch-list/watch-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'watch-list',
        component: WatchListComponent,
    }
];
