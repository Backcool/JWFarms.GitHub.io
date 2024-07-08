import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from "./footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatToolbarModule, MatFormFieldModule, FormsModule, MatSidenavModule, FooterComponent]
})
export class AppComponent {
  title = 'business-webpage';
}
