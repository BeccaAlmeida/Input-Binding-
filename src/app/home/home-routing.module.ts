import { ChildItemComponent } from './../components/event/child-item/child-item.component';
import { EventComponent } from './../components/event/event.component';
import { ClientComponent } from './../components/input-binding/client/client.component';
import { InputBindingComponent } from './../components/input-binding/input-binding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '../components/input-binding',
    component: InputBindingComponent,
  },
  {
    path: '../components/input-binding/client',
    component: ClientComponent,
  },
  {
    path: '../components/event',
    component: EventComponent,
  },
  {
    path: '../components/event/child-item',
    component: ChildItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
