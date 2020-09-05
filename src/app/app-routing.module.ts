import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';
import { HomeComponent } from './home/home.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  { path: 'updates', component: UpdatesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
