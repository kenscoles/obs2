import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../services/product.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ProductService],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {

// products list by signal
products = this.productService.getProducts();
form!: FormGroup;
submitted: boolean = false;

constructor(
  private productService: ProductService,
  private formBuilder: FormBuilder
) {
  this.createForm()
}



// add or update a product
save() {
  const key = this.form.value.key;
  console.log("============")
  console.log("save routine key = ", key)
  console.log("============")
  this.submitted = true;
  if (this.isNumber(key)) // index 0 did not update in orig code
    this.update();
  else
    this.add();
}

isNumber(n:any){
  return typeof n == 'number' && !isNaN(n) && isFinite(n);
}
// add a new product
add() {
  if (this.form.invalid) {
    return;
  }
  const product = {
    name: this.form.value.name,
    price: this.form.value.price
  } as Product;

  this.productService.addProduct(product);
  this.reset();
}


// edit a product
edit(key: number, product: any) {
  this.form.patchValue({
    key: key,
    name: product.name,
    price: product.price,
    submitted: false
  })
}


// update a product
update() {
  if (this.form.invalid) {
    return;
  }
  const key = this.form.value.key;
  const product = {
    name: this.form.value.name,
    price: this.form.value.price
  } as Product;
  //console.log("key: ",key )
  //console.log("product: ",product )
  this.productService.updateProduct(key, product);
  this.reset();

}

// delete a product
remove(key: number) {
  this.productService.deleteProduct(key);
}



// Computed signal to calculate the all products total price
totalPrice = computed(() => {
  return this.products().reduce((acc, curr) => acc + curr.price, 0);
});


// create form
createForm() {
  this.form = this.formBuilder.group({
    key: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });
}

// reset form
reset = () => {
  this.form.reset();
  this.submitted = false;
}

// get form controls
get f() { return this.form.controls; }


}
