import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MdDialog, private auth: AuthService) { }

  viewAboutDialog() {
    this.dialog.open(AboutComponent);
  }
}
