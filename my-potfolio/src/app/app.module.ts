import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSspComponent } from './project-ssp/project-ssp.component';
import { ProjectTriptageComponent } from './project-triptage/project-triptage.component';


const appRoutes: Routes = [
   { path: '', component: AboutComponent },
   {path:'education', component: EducationComponent},
   {path:'skills', component: SkillsComponent},
   {path:'experience', component: ExperienceComponent},
   {path:'projects', component: ProjectsComponent},
   {path:'project-ssp', component: ProjectSspComponent},
   {path:'project-triptage', component: ProjectTriptageComponent},
   
    
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectSspComponent,
    ProjectTriptageComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
