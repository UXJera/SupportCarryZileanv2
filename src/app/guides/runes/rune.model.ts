export class Rune {
  public name: string;
  public src: string;
  public highlight: boolean;
  public description: string;


  constructor(name: string, imagePath: string, description: string, highlight: boolean = false) {
    this.name = name;
    this.src = imagePath;
    this.description = description;
    this.highlight = highlight;
  }
}
