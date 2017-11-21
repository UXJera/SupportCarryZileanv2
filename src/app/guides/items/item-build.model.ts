export class ItemBuild {
  public name: string;
  public img: string;
  public optional: boolean;
  public description: string;

  constructor(name: string, imagePath: string, optional: boolean = false, description: string = '') {
    this.name = name;
    this.img = imagePath;
    this.optional = optional;
    this.description = description;
  }
}
