import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name: string;
    passwd: string;
    _count: number;

    constructor() { }

    ngOnInit() { }
    
    @Input()
    set count(val: number){
        this._count = val;
    }
    get count(): number{
        return this._count;
    }
}