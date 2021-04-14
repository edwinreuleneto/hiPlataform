import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/index.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public page = {
    listCheck: {
      load: true,
      row: [],
      errCount: 0
    }
  }

  constructor(
    private UsersService: UsersService
  ) { }

  ngOnInit(): void {
    this.GetListUsers();
  }

  private GetListUsers(): void {
    this.UsersService.GetUsers().subscribe( (users: any) => {
      this.page.listCheck = {
        load: true,
        row: users,
        errCount: 0
      }
    }, err => {
      this.page.listCheck.errCount < 5 ? setTimeout(() => this.GetListUsers(), 1500) : null;
    });
  }

}
