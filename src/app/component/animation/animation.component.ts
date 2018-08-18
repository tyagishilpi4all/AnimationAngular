import { Component} from '@angular/core';
import {trigger,state,style,transition,animate,keyframes,group} from '@angular/animations';
     

@Component({
    selector:'animation-comp',
    templateUrl:'../animation/animation.component.html',
    styleUrls:['../animation/animation.component.scss'],

    animations:[
        trigger('lightsOnOff',[
            state('off',style({
                backgroundColor:'black'
            })),
            state('on',style({
                backgroundColor:'white'
            })),
            transition('off<=>on',[animate('2s')]),
           // transition('on=>off',[animate('2s')])
        ])
    ]
})
export class animation{
    roomState:string='off';
    constructor(){}
    toggleLights(){
        this.roomState=this.roomState==='off'?'on':'off';
    }
}