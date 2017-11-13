export class ItemBuild {
  public index: number;
  public name: string;
  public img: string;
  //public description: string;
  //public selected: boolean;

  constructor(index: number, name: string, imagePath: string) {
    this.index = index;
    this.name = name;
    this.img = imagePath;
    //this.selected = false;
  }
}
