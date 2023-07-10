import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navAnimation', [
      state('open', style({
        padding: '7.375rem 5.75rem 100vh 2rem'
      })),
      state('closed', style({
        padding: '7.375rem 4.75rem 100vh 1rem'
      })),
      transition('open <=> closed', [
        animate('0.2s ease-out')
      ])
    ])
  ]
})
export class NavComponent {

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = this.elementRef.nativeElement.contains(event.target);
    const containsMenuIcon = (event.target as HTMLElement).classList.contains('menu-icon');
    if (!clickedElement && !containsMenuIcon) {
      this.navToggle = false;
    }
  }

  navToggle: boolean = false;
  isMediaMobile: boolean = window.innerWidth < 768;
  isMediaDesktop: boolean = window.innerWidth >= 1440;

  constructor(
    private elementRef: ElementRef
  ) { }

  toggleNav() {
    this.navToggle = !this.navToggle;
  }
}
