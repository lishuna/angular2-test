import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WebSiteDescComponent } from './website-desc/websitedesc.component';

const routes: Routes = [
    { path: 'webSiteDesc', component: WebSiteDescComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebSiteDescModule {}
