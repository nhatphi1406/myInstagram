import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { FollowingActivityComponent } from './following-activity/following-activity.component';


const routes: Routes = [
    {
        path: '',
        component: Tab3Page,
        children: [
            {
                path: 'following',
                component: FollowingActivityComponent
            },
            {
                path: 'user',
                component: UserActivityComponent
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class Tab3PageRoutingModule { }