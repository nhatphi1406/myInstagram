import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { SideMenuComponent } from './side-menu/side-menu.component';


const routes: Routes = [
    {
        path: '',
        component: Tab4Page,
        children: [
            {
                path: 'gallary',
                loadChildren: '../tab4/gallary/gallary.module#GallaryPageModule'
            },
            {
                path: 'tags-gallary',
                loadChildren: '../tab4/tags-gallary/tags-gallary.module#TagsGallaryPageModule'
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class Tab4PageRoutingModule { }