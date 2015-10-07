import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';


@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>Welcome to the Muscle Hamster</h1>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent },
])
export class AppComponent { }
