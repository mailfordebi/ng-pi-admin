import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './design-pattern.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { DesignPatternComponent } from './design-pattern.component';
import { FactoryPatternComponent } from './components/factory-pattern/factory-pattern.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        DesignPatternComponent,
        FactoryPatternComponent,
        DataTableComponent
    ]
})
export class DesignPatternModule { }
