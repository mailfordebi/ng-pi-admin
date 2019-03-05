import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './settings.routing';
import { SharedModule } from '../../shared/shared.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule { }
