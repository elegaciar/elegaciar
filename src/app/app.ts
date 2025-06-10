import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LinkButton } from './linkButtons';
import { LinkList } from './linkList';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'elegaciar';

  private list = new LinkList([
    new LinkButton("Rule34", "https://rule34.xxx/index.php?page=post&s=list&tags=user:elegaciar", "#ace7a7"),
    new LinkButton("LinkTree", "https://linktr.ee/elegaciar/", "#7fe168"),
  ]);

  get buttonList(): readonly LinkButton[] {
    return this.list.items;
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
