import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
    styleUrls: ['./sidebar.scss']
})
export class Sidebar implements OnInit{
    showdropDowMenu1 = false
    showdropDowMenu2 = false
    @Input() showMenu = true
    
    constructor() {}

    ngOnInit() {}

    dropDow1() {
        console.log("dropDow1");
        
        this.showdropDowMenu1 = !this.showdropDowMenu1
    }

    dropDow2() {
        this.showdropDowMenu2 = !this.showdropDowMenu2
    }

    SeeMenu() {
        this.showMenu = !this.showMenu
    }
}