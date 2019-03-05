import { Routes, RouterModule } from '@angular/router';
import { DesignPatternComponent } from './design-pattern.component';
import { FactoryPatternComponent } from './components/factory-pattern/factory-pattern.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const childRoutes: Routes = [
    {
        path: '',
        component: DesignPatternComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'factory-pattern', component: FactoryPatternComponent },
            { path: 'data-table', component: DataTableComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
