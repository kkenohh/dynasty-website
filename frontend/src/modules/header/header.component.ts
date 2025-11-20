import { Component, Input } from '@angular/core';

export interface NavItem {
  title: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() brand = 'Dynasty';
  @Input() brandHref = '/';
  @Input() items: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'Docs', href: '/docs' },
  ];
}
