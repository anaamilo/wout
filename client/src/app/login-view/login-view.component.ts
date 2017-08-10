import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  error:string;
  username:string;
  password:string;
  constructor(private session: SessionService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.username,this.password)
      .subscribe(
        (user) => {
          console.log(user);
          this.router.navigate(['']);
        },
        (err) => this.error = err
      );
  }
}
