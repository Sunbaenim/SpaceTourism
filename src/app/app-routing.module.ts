import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './features/crew/crew.component';
import { DestinationComponent } from './features/destination/destination.component';
import { TechnologyComponent } from './features/technology/technology.component';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'destination', component: DestinationComponent },
    { path: 'crew', component: CrewComponent },
    { path: 'technology', component: TechnologyComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }