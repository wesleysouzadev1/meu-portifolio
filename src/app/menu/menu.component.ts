import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) {}

    menuItems?: Array<Menu>;

    ngOnInit() {
      const menu = this.menuService.getItems();

      this.menuItems = menu;
    }

}
