import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-home' })
@View({
	templateUrl: './app/views/form.html',
	directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
	public gender = 'Male';
	public bodyweight = 180;
	public bench = 380;
	public count = 0;
	public performance = "";

	sayHello() {
		if(this.gender == "Male"){
			if(this.bench < this.bodyweight * 1.25){
				this.performance = "Poor"
        this.img = "http://cdn.meme.am/instances/53708159.jpg"
			}
			else if(this.bench >= this.bodyweight * 2) {
				this.performance = "ARNOLD"
        this.img = "http://www.apec-s.com/wp-content/uploads/2013/10/Arnold-pic.jpg"
			}
			else if(this.bench >= this.bodyweight * 1.75){
				this.performance = "Excellent"
        this.img = "http://static.businessinsider.com/image/4eb007c7eab8eab82b00001d/image.jpg"
			}
			else if(this.bench >= this.bodyweight * 1.25){
				this.performance = "Good"
        this.img = "http://static.socialitelife.com/uploads/2013/06/19/paul-rudd-underwear-06192013-400x300.jpg"
			}
		}
		else {
			if(this.bench < this.bodyweight * 0.8){
				this.performance = "Poor"
        this.img = "http://media.salon.com/2006/12/rosie_vs_donald_the_highlight_reel_so_far.jpg"
			}
			else if(this.bench >= this.bodyweight * 1.25) {
				this.performance = "RONDA"
        this.img = "https://cdn0.vox-cdn.com/thumbor/gIWaQCI43SUnhYozkyUZYV7wkkw=/0x0:1471x1103/400x300/cdn0.vox-cdn.com/uploads/chorus_image/image/46944156/GettyImages-482585372.0.jpg"
			}
			else if(this.bench >= this.bodyweight * 1){
				this.performance = "Excellent"
        this.img = "http://www.bolegaindia.com/images/gossips/serena-williams-post_1368005313.jpg"
			}
			else if(this.bench >= this.bodyweight * 0.8){
				this.performance = "Good"
        this.img = "http://www.paperhi.com/thumbnails/detail/20131028/women%20actress%20arrows%20braids%20jennifer%20lawrence%20katniss%20everdeen%20the%20hunger%20games_www.paperhi.com_98.jpg"
			}
		}
	}
}
