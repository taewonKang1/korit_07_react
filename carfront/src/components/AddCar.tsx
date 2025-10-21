import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCar } from '../api/carapi';
import { Car } from '../types';

function AddCar() {
  const [ open, setOpen ] = useState(false);
  const [ car, setCar ] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  })

  const handleClickOpen = () => setOpen(true);

  const handleClickClose = () => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"]})
    },
    onError: err => {
      console.log(err);
    },
  });

  const handleSave = () => {
    mutate(car);
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0
    })
  };

  return(
    <>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <input type="text" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange}/><br />
          <input type="text" name="model" value={car.model} placeholder="Model" onChange={handleChange}/><br />
          <input type="text" name="color" value={car.color} placeholder="Color" onChange={handleChange}/><br />
          <input type="text" name="registrationNumber" value={car.registrationNumber} placeholder="Registration Number" onChange={handleChange}/><br />
          <input type="number" name="modelYear" value={car.modelYear} placeholder="Model Year" onChange={handleChange}/><br />
          <input type="number" name="price" value={car.price} placeholder="Price" onChange={handleChange}/><br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClickClose}>Cancel | 취소</button>
          <button onClick={handleSave}>Save | 저장</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar