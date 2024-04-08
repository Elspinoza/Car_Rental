import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.scss'
})
export class UpdateCarComponent {

  carId: number = this.activatedRoute.snapshot.params['id'];
  existingImage: string | null = null;

  updateForm!: FormGroup;
  imgChanged: boolean = false;
  isSpinning: boolean = false;
  // @ts-ignore
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null;
  listOfOption: Array<{ label: string; value: string}> = [];
  listOfBrands = ["BMW", "AUDI", "FERRARI", "TESLA", "MERCEDES", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfTransmission = ["Manuel", "Automatic"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];


  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    this.getCarById();
    this.updateForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    })
  }

  getCarById() {
    this.isSpinning = true;
    this.adminService.getCarById(this.carId).subscribe((res)=> {
      this.isSpinning = false;
      const carDto = res;
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
      // console.log(carDto);
      // console.log(this.existingImage);
      this.updateForm.patchValue(carDto);
    });
  }

  updateCar() {
    this.isSpinning = true;

    const formData: FormData = new FormData();
    if (this.imgChanged && this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    // @ts-ignore
    formData.append('brand', this.updateForm.get('brand').value);
    // @ts-ignore
    formData.append('name', this.updateForm.get('name').value);
    // @ts-ignore
    formData.append('type', this.updateForm.get('type').value);
    // @ts-ignore
    formData.append('color', this.updateForm.get('color').value);
    // @ts-ignore
    formData.append('year', this.updateForm.get('year').value);
    // @ts-ignore
    formData.append('transmission', this.updateForm.get('transmission').value);
    // @ts-ignore
    formData.append('description', this.updateForm.get('description').value);
    // @ts-ignore
    formData.append('price', this.updateForm.get('price').value);

    console.log(formData);

    this.adminService.updateCar(this.carId, formData).subscribe((res) => {
      this.isSpinning = false;
      this.message.success("Car updated successfully", { nzDuration: 5000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    },error => {
      this.message.error("Error while updating car", { nzDuration: 5000 });
    })


  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imgChanged = true;
    this.existingImage = null;
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

}
