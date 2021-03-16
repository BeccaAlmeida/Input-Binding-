import { ChildItemComponent } from './../components/event/child-item/child-item.component';
import { EventComponent } from './../components/event/event.component';
import { ClientComponent } from './../components/input-binding/client/client.component';
import { InputBindingComponent } from './../components/input-binding/input-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent
  ]
})
export class HomePageModule {}
