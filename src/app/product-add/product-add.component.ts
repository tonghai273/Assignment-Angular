import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor(private productServiceService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productServiceService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/admin'));
  }
}
