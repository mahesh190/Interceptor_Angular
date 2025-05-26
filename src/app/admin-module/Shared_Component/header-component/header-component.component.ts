import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceA } from 'src/app/Models/interface-a';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  constructor(private route: Router) {}
  headerList:InterfaceA[] | undefined;

 

   menuList:InterfaceA[]=[
    {path:'home' , title:'Home', roles:['admin','manager','mahesh','nilesh']},
    {path:'contact' , title:'Contact', roles:['manager']},
    {path:'setting' , title:'Setting', roles:['manager','mahesh']},
    {path:'about' , title:'About Us', roles:['nilesh']},

  ]
  ngOnInit(): void {

  this.headerList = this.menuList.filter((m:any)=>{
      return m.roles.includes('manager')
    })
    console.log("headerlist",this.headerList)
  }

  

  logout() {
    localStorage.removeItem('res-token');
    this.route.navigateByUrl('login');
  }
}
