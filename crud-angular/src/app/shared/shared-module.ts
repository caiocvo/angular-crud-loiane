import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialog } from './components/error-dialog/error-dialog';
import { AppMaterialModule } from './app-material/app-material-module';
import { CategoryPipe } from './pipes/category-pipe';
@NgModule({
  declarations: [ErrorDialog], //Só componentes
  imports: [CommonModule, AppMaterialModule, CategoryPipe], //Módulos no import
  exports: [ErrorDialog, CategoryPipe],
})
export class SharedModule {}
