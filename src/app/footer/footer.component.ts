import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
