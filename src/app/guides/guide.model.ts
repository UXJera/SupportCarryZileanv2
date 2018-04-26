export class Guide {
  public index: number;
  public name: string;
  public img: string;
  public selected: boolean;
  public description: string;


  constructor(index: number, name: string, imagePath: string, selected?: boolean) {
    this.index = index; // For Spells
    this.name = name;
    this.img = imagePath;
    this.selected = selected;
  }
}
