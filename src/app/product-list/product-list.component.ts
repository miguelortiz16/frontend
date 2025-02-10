import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  searchProductById(id: String): void {
    this.productService.getProductById(id).subscribe((product) => {
      this.selectedProduct = product;
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); // Recargar la lista
    });
  }

  editProduct(product: Product): void {
    // Navegar a la página de edición (ajusta la ruta según tu app)
    window.location.href = `/edit/${product.id}`;
  }
}
