import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.Component.html'
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }
}