import { Component } from '@angular/core';
import { ContatoService } from "../service/contato.service";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  public name: string = '';
  public email: string = '';
  public message: string = '';

  constructor(private contatoService: ContatoService) {
  }

  sendEmail() {
    const emailData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contatoService.sendEmail(emailData)
      .subscribe(
        () => console.log('Email enviado com sucesso!'),
        (error) => console.error(error)
      );
  }
}
