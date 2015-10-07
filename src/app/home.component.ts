import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-home' })
@View({
	template: `
		<h2>Home of the Muscle Hamster</h2>
		<div>I don't know about this {{name}} person</div>
		<input [(ng-model)]="name" />
		<button (click)="sayHello()">Say Hello</button>
		<button (click)="sayWhatUp()">Say What Up</button>
		<p>{{count}}</p>
		<p>{{message}}</p>
		<p>{{whatup}}</p>
	`,
	directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
	public name = 'Brian Gates';
	public message = '';
	public whatup = "What's Up Orlando!!!";
	public count = 0;

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
		this.count++
	}

	sayWhatUp() {
	  this.whatup = 'What Up ' + this.name + '!';
		this.count++
	}
}
