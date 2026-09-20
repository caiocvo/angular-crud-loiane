import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialog } from './components/error-dialog/error-dialog';
import { AppMaterialModule } from './app-material/app-material-module';
@NgModule({
  declarations: [ErrorDialog], //Só componentes
  imports: [CommonModule, AppMaterialModule], //Módulos no import
  exports: [ErrorDialog],
})
export class SharedModule {}
