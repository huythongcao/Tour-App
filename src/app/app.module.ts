import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { TourService } from './services/tour.service';
import { MyCustomModalComponent } from './components/my-custom-modal/my-custom-modal.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { InputFormatDirective } from './directives/input-format.directive';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TodoListComponent,
    TourListComponent,
    ButtonComponent,
    MyCustomModalComponent,
    TourCardComponent,
    SummaryPipe,
    InputFormatDirective,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'tours',
        component: TourListComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

