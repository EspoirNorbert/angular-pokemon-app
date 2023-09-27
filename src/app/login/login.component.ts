import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = "Vous etes deconnectés. (pikachu/pikachu)";
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.auth = this.authService
  }

  setMessage(){
    if (this.auth.isLoggedIn){
      this.message = "Vous etes connecté";
    } else {
      this.message= "Identifiant ou mot de passe incorrect."
    }
  }

  login(){
    this.message = 'Tentative de connexion en cours....'
    this.auth.login(this.name, this.password).subscribe(
      (isLoggedIn: Boolean) => {
       if (isLoggedIn){
       this.setMessage();
        this.router.navigate(['/pokemons']);
       } else {
       this.setMessage();
        this.password = '';
        this.router.navigate(['/login']);
       }
      }
    )
  }

  logout() {
    this.auth.logout();
    this.message = "Vous etes deconnecté";
  }

}
