import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/index', icon: 'home' },
    { title: 'Meu Perfil', url: '/perfil', icon: 'build' },
    { title: 'Mensagens', url: '/menssage', icon: 'mail' },
    { title: 'Sobre Nós', url: '/about', icon: 'archive' },
  ];
  constructor() {}
}
