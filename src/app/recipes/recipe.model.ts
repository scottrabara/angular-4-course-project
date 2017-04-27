export class Recipe {
	public name: string;
	public descrip: string;
	public imagePath: string;

	constructor(name:string, desc: string, imagePath: string) {
		this.name = name;
		this.descrip = desc;
		this.imagePath = imagePath
	}
}