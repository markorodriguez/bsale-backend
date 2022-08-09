export interface Iproduct {
    id: number;
    name: string;
    url_image: string;
    price: number;
    discount: number;
    category: number;
    namecat: string
  }
  
  export class Product {
    public id: number;
    public name: string;
    public url_image: string;
    public price: number;
    public discount: number;
    public category: number;
    public namecat: string;
    public newPrice: number;
    
  
    constructor({ id, name, url_image, price, discount, category, namecat }: Iproduct) {
      this.id = id;
      this.name = name;
      this.url_image = url_image;
      this.price = price;
      this.discount = discount;
      this.category = category;
      this.namecat = namecat;
      this.newPrice = this.price - this.price * (this.discount / 100);
    }
  }
  