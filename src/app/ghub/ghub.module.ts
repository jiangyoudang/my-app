import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhubComponent } from './ghub.component';
import {HttpClientModule} from '@angular/common/http';
import {GhubService} from './ghub.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GhubComponent],
  exports: [GhubComponent],
  providers: [GhubService]
})
export class GhubModule { }
