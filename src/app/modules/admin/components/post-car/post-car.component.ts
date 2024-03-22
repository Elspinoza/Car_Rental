import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.scss'
})
export class PostCarComponent {

  postCarForm!: FormGroup;

  isSpinning: boolean = false;
  // @ts-ignore
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null = null;
  listOfOption: Array<{ label: string; value: string}> = [];
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfTransmission = ["Manuel", "Automatic"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];

  constructor( private fb: FormBuilder) {
  }

  ngOnInit () {
    this.postCarForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    });
  }

  postCar() {
    console.log(this.postCarForm.value);
    const formData: FormData = new FormData();

    // @ts-ignore
    formData.append('img', this.selectedFile);
    // @ts-ignore
    formData.append('brand', this.postCarForm.get('brand').value);
    // @ts-ignore
    formData.append('name', this.postCarForm.get('name').value);
    // @ts-ignore
    formData.append('type', this.postCarForm.get('type').value);
    // @ts-ignore
    formData.append('color', this.postCarForm.get('color').value);
    // @ts-ignore
    formData.append('year', this.postCarForm.get('year').value);
    // @ts-ignore
    formData.append('transmission', this.postCarForm.get('transmission').value);
    // @ts-ignore
    formData.append('description', this.postCarForm.get('description').value);
    // @ts-ignore
    formData.append('price', this.postCarForm.get('price').value);

    console.log(formData);
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    // @ts-ignore
    reader.readAsDataURL(this.selectedFile);
  }

}
