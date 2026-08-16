import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';

@Component({
  selector: 'app-navbar',
  imports: [AppMaterialModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
