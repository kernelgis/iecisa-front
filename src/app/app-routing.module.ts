import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestComponent } from './request/request.component';
import { ValidationComponent } from './validation/validation.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent
  },
  { path: 'request', component: RequestComponent},
  { path: 'validation', component: ValidationComponent},
  { path: 'response', component: ResponseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
