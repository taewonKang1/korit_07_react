import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DataGrid, GridCellParams, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Snackbar, IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddItem from "./AddItem";

function Itemlist() {
  const [ open, setOpen ] = useState(false)
  const queryClient = useQueryClient();
  const { data, error, isSuccess } = useQuery({
    queryKey: ["items"],
    queryFn: getItems
  });
  <div className=""></div>

  const { mutate } = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"]})
    },
    onError: err => {
      console.log(err);
    },
  })

  const columns: GridColDef[]= [
    {field: 'product', headerName: 'Product', width: 200},
    {field: 'amount', headerName: 'Amount', width: 200},
    {
      field: 'edit',
      headerName: '',
      width: 40,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => 
        <EditItem cardata={params.row} />
    },
    {
      field: 'delete',
      headerName: '',
      width: 40,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <Tooltip title="Delete Item">
        <IconButton aria-label="delete" size="small"
          onClick={() => {
            if (window.confirm(`${params.row.brand}의 ${params.row.model} 아이템를 삭제하시겠습니까?`)) {
              mutate(params.row._links.self.href);}}
          }
        >
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
        </Tooltip>
      )
    }
  ];

  if(!isSuccess) {
    return <span>Loading... 🔮</span>
  }

  if (error) {
    return <span>아이템들을 불러오는 데 실패했습니다. 😱</span>
  }
  else {
    return (
      // <table>
      //   <tbody>
      //     {
      //       data.map((car: CarResponse) =>
      //         <tr key={car._links.self.href}>
      //           <td>{car.brand}</td>
      //           <td>{car.model}</td>
      //           <td>{car.color}</td>
      //           <td>{car.registrationNumber}</td>
      //           <td>{car.modelYear}</td>
      //           <td>{car.price}</td>
      //         </tr>
      //       )
      //     }
      //   </tbody>
      // </table>
      <>
        <AddItem />
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={row => row._links.self.href}
          slots={{ toolbar: GridToolbar }}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message='선택한 아이템의 정보가 삭제되었습니다.'
        />
      </>
    )
  }
}

export default Itemlist