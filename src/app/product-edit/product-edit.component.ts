import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    var id: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
