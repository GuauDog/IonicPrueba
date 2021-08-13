import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arlauncher',
    loadChildren: () => import('./arlauncher/arlauncher.module').then( m => m.ARLauncherPageModule)
  },
  {
    path: '',
    redirectTo: 'arlauncher',
    pathMatch: 'full'
  },
  {
    path: 'arlauncher',
    loadChildren: () => import('./arlauncher/arlauncher.module').then( m => m.ARLauncherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
