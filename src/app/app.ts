import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './components/system/footer/footer';
import {Navbar} from './components/system/navbar/navbar';
import {MessageComponent} from './components/system/message/message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, MessageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
