export class ItemBuild {
  public index: number;
  public name: string;
  public img: string;
  public optional: boolean;
  //public description: string;
  //public selected: boolean;

  constructor(index: number, name: string, imagePath: string,optional:boolean=false) {
    this.index = index;
    this.name = name;
    this.img = imagePath;
    this.optional = optional;
    //this.selected = false;
  }
}
