import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component.ts';


@Component({ selector: 'my-app' })
@View({
  template: `
    <header class="jumbotron">
    <img id="firstHamster" src="https://isowhey.files.wordpress.com/2013/03/shutterstock_92573752.jpg">
    <h1>Welcome to the Muscle Hamster</h1>
    <img id="secondHamster" src="https://isowhey.files.wordpress.com/2013/03/shutterstock_92573752.jpg">
    </header>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent },
])
export class AppComponent { }
