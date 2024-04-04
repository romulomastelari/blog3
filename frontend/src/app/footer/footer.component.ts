import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
}
