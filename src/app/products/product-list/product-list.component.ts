import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string="Welcome To Product List";

  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  private _filterText: string='';
  filteredProduct: Product[];
  checkFilterItemsStatus: boolean=false;

  get filterText(): string{
    return this._filterText;
  }

  set filterText(text: string){
       this._filterText=text;
       this.filteredProduct=this.getProductFilter(text);
       if(this.filteredProduct.length>0){
         this.checkFilterItemsStatus=true;
       }
  }



  products: Product[]=[];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next:products=>{
        this.products=products;
        this.filteredProduct=this.products;
      },
      error:err=>console.log(err)
    });
  }
    

  toggleImage(): void{
      this.showImage=!this.showImage;
  }

  

  getProductFilter(filterText: string):Product[]{
    const filterBy: string=filterText.toLocaleLowerCase();
    return this.products.filter((product:Product)=>product.productName.toLocaleLowerCase().includes(filterBy));
  }

  sortBy():void{
    
  }

  onRatingClicked(message: string): void{
    this.pageTitle=this.pageTitle +" "+message;
  }

}
