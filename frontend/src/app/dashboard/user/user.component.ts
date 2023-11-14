
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userDetails!: User;
  

  constructor(private authService: AuthService, private route: ActivatedRoute) {}
 
  ngOnInit() {
    
    // Get the userID from the route parameters
    const userID = this.route.snapshot.paramMap.get('userID');

    if (userID) {
      this.authService.getUserDetails(userID).subscribe(
        (userDetails) => {
          this.userDetails = userDetails;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('userID is null.');
    }
  }
  }

