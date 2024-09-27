import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { GlobalService } from './services/global.service';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { loginInterceptor } from './interceptor/login.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    BlogsComponent,
    AboutComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    FormsModule, // two way binding ngModel ==> template driven form
    ReactiveFormsModule // reactive form
  ],
  providers: [
    provideHttpClient(
      withInterceptors([loginInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
