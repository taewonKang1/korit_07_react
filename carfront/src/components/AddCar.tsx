import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import { ChangeEvent, KeyboardEvent , useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCar } from '../api/carapi';
import { Car } from '../types';
import CarDialogContent from './CarDialogContent';

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault(); // 기본 제출 동작 방지
        handleSave();
      }
    };

  return(
    <>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <div onKeyDown={handleKeyDown}>
          <CarDialogContent car={car} handleChange={handleChange} />
        </div>
        <DialogActions>
          <button onClick={handleClickClose}>Cancel | 취소</button>
          <button onClick={() => { handleSave(); handleClickClose(); }}>Save | 저장</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar