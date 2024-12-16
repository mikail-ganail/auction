import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [MainComponent, ContentComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
