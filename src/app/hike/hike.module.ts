import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe';
import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';

@NgModule({
    imports:      [CommonModule, RouterModule, FormsModule],
    exports:      [HikeListComponent],
    declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe],
    providers:    [HikeService]
})
export class HikeModule { }
