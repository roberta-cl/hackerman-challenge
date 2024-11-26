import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { SearchComponent } from './components/search/search.component';
import { emailGuard } from './guards/email.guard';

const routes: Routes = [
  { path: '', redirectTo: '/email', pathMatch: 'full' },
  { path: 'email', component: EmailComponent },
  { path: 'search', component: SearchComponent, canActivate: [emailGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
