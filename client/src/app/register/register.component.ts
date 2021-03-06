import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Input() userFromHomeComponent: any; //recibir de padre a componente hijo
  @Output() cancelRegister = new EventEmitter(); //mandar datos del hijo al component padre


  model: any = {}
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model)
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response)
      this.cancel()
    },err =>{
      console.log(err)
    })
  }

  cancel()
  {
    //console.log('cancelled')
    this.cancelRegister.emit(false)
  }

}
