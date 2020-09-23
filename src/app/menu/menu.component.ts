import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentRoute: string = null;

  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
