import { Component } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {

}
export interface Client{
  id: number;
  picture: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  wallet: string;
}