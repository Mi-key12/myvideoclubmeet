import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AutorPage } from './autor/autor.page';
import { CurriculumPage } from './curriculum/curriculum.page';
import { VideoclubPage } from './videoclub/videoclub.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'autor',
    component: AutorPage,
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'curriculum',
    component: CurriculumPage,
    loadChildren: () => import('./curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  },
  {
    path: 'videoclub',
    component: VideoclubPage,
    loadChildren: () => import('./videoclub/videoclub.module').then( m => m.VideoclubPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
