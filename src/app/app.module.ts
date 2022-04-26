import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    SummaryPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

