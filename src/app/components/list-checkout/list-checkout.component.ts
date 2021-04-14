import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-checkout',
  templateUrl: './list-checkout.component.html',
  styleUrls: ['./list-checkout.component.sass']
})
export class ListCheckoutComponent implements OnInit {

  @Input() classStyle: string = null; //Class opicional
  @Input() load: boolean = true; //Status do carregamento de conteudo
  @Input() row: any; //Lista de usuários
  @Input() display: boolean = true; //Exibir ou não a lista
  @Input() idFather: string = null; //ID do item pai

  @Output() childrenCheck: EventEmitter<any> = new EventEmitter();

  constructor(
  ) {}

  ngOnInit(): void {}

  public openChildren(item): void {
    item.display = !item.display;
    //Seria legal se fosse um serviço que entregasse o conteúdo somente quando requisitado baseado no ID do elemento pai.

    item.level == 0 ? this.scrollTo(item.id) : null;
  }

  public isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  public changeCheck(item: any, newStatus: boolean) {
    this.isEmpty(item.children) ? this.checkItem(item, newStatus) : this.checkAllChildren(item, newStatus);
  }

  private setIndeterminate(item, newStatus){
    item.checked = false;
    item.indeterminate = newStatus;
  }

  private checkItem(item: any, newStatus: boolean): void {
    item.checked = newStatus;
    item.indeterminate = false;
  }

  public emitChangeChildren(row){
    const disabled = Object.entries(row).filter(([key, value]:any) => !value.checked)
    const active = Object.entries(row).filter(([key, value]:any) => value.checked)
    this.childrenCheck.emit({disabled, active, idFather: this.idFather});
  }

  public getEventChangeChildren($event) {
    Object.entries(this.row).filter(([key, value]:any) => {
      if(value.id == $event.idFather) { 
        $event.disabled.length ? this.setIndeterminate(value, true) : this.checkItem(value, true);
        $event.active.length ? null : this.setIndeterminate(value, false);
        this.emitChangeChildren(this.row);
      }
    });
  }

  private checkAllChildren(item: any, newStatus: boolean): void {
    this.checkItem(item, newStatus);
    item.checkedAll = newStatus;

    Object.entries(item.children).forEach( ([key, value]:any) => { 
      this.changeCheck(value, newStatus);
    });
  }

  public scrollTo(id) : void {
    const el = document.getElementsByClassName(id).item(0);
    const top = el.firstChild.parentElement.offsetTop;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  }
}
