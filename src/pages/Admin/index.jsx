import React, { useEffect, useState } from 'react'
import {api} from '../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  const [pedidos, setPedidos] = useState();

  useEffect(() => {
    async function getProduct(){
        await api.get('/pedidos').then((result) => {
            const pedidos = result.data
            setPedidos(pedidos)
        })
    }
    getProduct()
}, []);
  return (
    <TableContainer component={Paper} style={{height: '100vh', margin:'100px 0'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PEDIDOS</TableCell>
            <TableCell>PRODUTOS</TableCell>
            <TableCell>VALOR TOTAL</TableCell>
            <TableCell>DATA</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cod_pedido}
              </TableCell>
              <TableCell >{row.nome_produto}</TableCell>
              <TableCell>{row.valor_total}</TableCell>
              <TableCell>{row.data_pedido}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React, {useState, useEffect} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {api} from '../../services/api'
// // import { Container } from './styles';

// import * as C from './style';
// function Admin() {
//   const [pedidos, setPedidos] = useState();

//   useEffect(() => {
//     async function getProduct(){
//         await api.get('/pedidos').then((result) => {
//             const pedidos = result.data
//             setPedidos(pedidos)
//         })
//     }
//     getProduct()
// }, []);

//   return(
//     <div style={{height: '100vh', margin:'100px 0'}}>
//         <h1>Bem vindo Administrador</h1>
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell>Calories</TableCell>
//             <TableCell>Fat&nbsp;(g)</TableCell>
//             <TableCell>Carbs&nbsp;(g)</TableCell>
//             <TableCell>Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {pedidos.map((row,index) => (
//             <TableRow
//               key={index}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.cod_pedido}
//               </TableCell>
//               <TableCell>{row.cod_pedido}</TableCell>
//               <TableCell>{row.nome_produto}</TableCell>
//               <TableCell>{row.data_pedido}</TableCell>
//               <TableCell>{row.valor_total}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }

// export default Admin;