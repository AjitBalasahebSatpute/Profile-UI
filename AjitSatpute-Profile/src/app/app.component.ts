import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AjitSatpute-Profile';
  menu!:any;
  icon!:any;
  ngOnInit(): void {
  
      
  }
 toggleMenu(){
  console.log("clicked")
     this.menu= document.querySelector(".menu-links");
     this.icon= document.querySelector(".hamburger-icon");
    this.menu.classList.toggle("open")
    this.icon.classList.toggle("open")
}
}
