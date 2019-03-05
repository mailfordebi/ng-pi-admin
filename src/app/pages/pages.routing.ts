import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'design-pattern', loadChildren: './design-pattern/design-pattern.module#DesignPatternModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' }            
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
