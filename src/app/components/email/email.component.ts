import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  email: string = '';
  emailError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(this.email);
  }

  goToSearchPage(): void {
    if (this.isEmailValid()) {
      localStorage.setItem('userEmail', this.email);
      this.router.navigate(['/search']);
    } else {
      this.emailError = true;
    }
  }
}
