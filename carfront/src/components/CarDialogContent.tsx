import { DialogContent } from "@mui/material";
import { ChangeEvent } from "react";
import { Car } from "../types";

type DialogFormProps = {
  car: Car;
  handleChange: (event: ChangeEvent<HTMLInputElement>) =>
    void;
}

function CarDialogContent({car, handleChange} : DialogFormProps) {
  return(
    <DialogContent>
      <input type="text" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange}/><br />
      <input type="text" name="model" value={car.model} placeholder="Model" onChange={handleChange}/><br />
      <input type="text" name="color" value={car.color} placeholder="Color" onChange={handleChange}/><br />
      <input type="text" name="registrationNumber" value={car.registrationNumber} placeholder="Registration Number" onChange={handleChange}/><br />
      <input type="number" name="modelYear" value={car.modelYear} placeholder="Model Year" onChange={handleChange}/><br />
      <input type="number" name="price" value={car.price} placeholder="Price" onChange={handleChange}/><br />
    </DialogContent>
  );
}

export default CarDialogContent