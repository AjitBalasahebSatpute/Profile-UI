import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menu!:any;
  icon!:any;
 toggleMenu(){
     this.menu= document.querySelector(".menu-links");
     this.icon= document.querySelector(".hamburger-icon");
    this.menu.classList.toggle("open")
    this.icon.classList.toggle("open")
}

}
