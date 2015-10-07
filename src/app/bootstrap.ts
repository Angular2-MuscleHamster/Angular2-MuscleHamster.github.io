import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component.ts';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
