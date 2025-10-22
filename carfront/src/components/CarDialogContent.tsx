import { DialogContent, TextField, Stack } from "@mui/material";
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
      <Stack spacing={2} sx={{ mt: 1 }}>
        <TextField label="Brand" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange}/>
        <TextField label="model" name="model" value={car.model} placeholder="Model" onChange={handleChange}/>
        <TextField label="color" name="color" value={car.color} placeholder="Color" onChange={handleChange}/>
        <TextField label="registrationNumber" name="registrationNumber" value={car.registrationNumber} placeholder="Registration Number" onChange={handleChange}/>
        <TextField label="modelYear" name="modelYear" value={car.modelYear} placeholder="Model Year" onChange={handleChange}/>
        <TextField label="price" name="price" value={car.price} placeholder="Price" onChange={handleChange}/>
      </Stack>
    </DialogContent>
  );
}

export default CarDialogContent