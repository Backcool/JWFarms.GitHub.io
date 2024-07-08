import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatSidenavModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
