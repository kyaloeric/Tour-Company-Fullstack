import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UserComponent } from './dashboard/user/user.component';
import { ToursComponent } from './tours/tours.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: ""},
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path: 'footer', component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'user', component:UserComponent,},
  {path:'tours', component:ToursComponent},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
