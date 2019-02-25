import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Pipes
// import { PipesModule } from '../pipes/pipes.module';

// import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        // PipesModule
    ],
    declarations: [
        // NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent,
        // ModalUploadComponent
    ],
    exports: [
        // NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent,
        // NopagefoundComponent,
        // ModalUploadComponent
    ]
})
export class SharedModule { }
