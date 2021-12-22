import { Routes } from '@angular/router';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';

import { ViewChildComponent } from './view-child/view-child';
import { ViewChildrenComponent } from './view-children/view-children';
import { ContentChildComponent } from './content-child/content-child';
import { ContentChildrenComponent } from './content-children/content-children';
export const appRoutes: Routes = [
  { path: 'ng-template', component: MyNgTemplateComponent },
  {
    path: 'ng-template-outlet',
    component: MyNgTemplateOutletComponent,
  },
  { path: 'ng-container', component: MyNgContainerComponent },
  { path: 'ng-content', component: MyNgContentComponent },
  { path: 'view-child', component: ViewChildComponent },
  { path: 'view-children', component: ViewChildrenComponent },
  { path: 'content-child', component: ContentChildComponent },
  { path: 'content-children', component: ContentChildrenComponent },
  { path: '', redirectTo: '/ng-template', pathMatch: 'full' },
  { path: '**', component: MyNgTemplateComponent },
];