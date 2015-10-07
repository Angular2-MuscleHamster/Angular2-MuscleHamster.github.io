import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-home' })
@View({
	templateUrl: './app/views/form.html',
	directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
	public gender = '';
	public bodyweight = 0;
	public bench = 0;
	public count = 0;
	public performance = "";

	sayHello() {
		if(this.gender == "Male"){
			if(this.bench < this.bodyweight * 1.25){
				this.performance = "Poor"
			}
			else if(this.bench >= this.bodyweight * 2) {
				this.performance = "ARNOLD"
			}
			else if(this.bench >= this.bodyweight * 1.75){
				this.performance = "Excellent"
			}
			else if(this.bench >= this.bodyweight * 1.25){
				this.performance = "Good"
			}
		}
		else {
			if(this.bench < this.bodyweight * 0.8){
				this.performance = "Poor"
			}
			else if(this.bench >= this.bodyweight * 1.25) {
				this.performance = "RONDA"
			}
			else if(this.bench >= this.bodyweight * 1){
				this.performance = "Excellent"
			}
			else if(this.bench >= this.bodyweight * 0.8){
				this.performance = "Good"
			}
		}
	}
}
