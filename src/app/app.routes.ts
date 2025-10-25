import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { ResetComponent } from './components/Auth/reset/reset.component';
import { StudentaccComponent } from './components/Auth/studentacc/studentacc.component';
import { SearchComponent } from './components/search/search.component';
<<<<<<< HEAD
import { ListOFCoursesComponent } from './components/Courses/list-of-courses/list-of-courses.component';
import { CoursesPageComponent } from './components/Courses/courses-page/courses-page.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { StudentPageComponent } from './components/student-page/student-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
=======
import { CoursesPageComponent } from './components/Courses/courses-page/courses-page.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { NewsContactComponent } from './components/news-contact/news-contact.component';
import { InformationPanelComponent } from './components/information-panel/information-panel.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';

export const routes: Routes = [



{ path: '', component: HomeComponent },
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'student', component: StudentaccComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'search', component: SearchComponent },
<<<<<<< HEAD
  { path: 'assignments', component: AssignmentComponent },
  { path: 'myaccount', component: StudentPageComponent },
=======
  { path: 'manageaccounts', component: ManageAccountsComponent },
  { path: 'Contactus', component: NewsContactComponent },
  { path: 'informationPanel', component: InformationPanelComponent },
  { path: 'adminAccount', component: AdminAccountComponent },
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
];
