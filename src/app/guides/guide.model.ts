export class Guide {
  public index: number;
  public name: string;
  public img: string;
  public selected: boolean;
  public description: string;


  constructor(index: number, name: string, imagePath: string) {
    // Add in optional value for description or a default value
    this.index = index;
    this.name = name;
    this.img = imagePath;
    this.selected = false;
    //this.description = description;
  }
}
