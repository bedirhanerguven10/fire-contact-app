import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper
} from "@mui/material";
import {useFetch} from "../../utils/functions"



const Contacts = () => {
  const {isLoading,contactList} = useFetch();
 
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
                      
              <TableRow>
              <TableCell textAlign="center"></TableCell>
              <TableCell textAlign="center"></TableCell>
              <TableCell textAlign="center"></TableCell> 
              <TableCell textAlign="center">
              </TableCell> 
              <TableCell textAlign="center">
              </TableCell> 
             </TableRow>      

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;

