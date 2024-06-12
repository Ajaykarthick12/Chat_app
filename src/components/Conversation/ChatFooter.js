import React from 'react'
import { Stack, Box , IconButton, TextField, InputAdornment} from '@mui/material';
import {styled} from "@mui/material";
import { LinkSimple,  Smiley,  PaperPlaneTilt } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
   const theme=useTheme();
    const StyledInput = styled(TextField)(({theme}) =>({
        "& .muiInputBase=input":{
         paddingTop:"12px",
         paddingBottom:"12px",
        }
   }));
   
  return (
    <Box 
      p={2}
      sx={{ width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.mode.paper , boxShadow: "0px 0px 2px rgba(0, -0, -0, -0.25)" }}>
        <Stack direction="row" alignItems={"center"} spacing={3}>
           <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{disableUnderline:true, startAdornment:<InputAdornment>
           <inputButton>
             <LinkSimple/>
           </inputButton>
           </InputAdornment>,
           endAdornment:<InputAdornment>
           <inputButton>
             <Smiley/>
           </inputButton>
           </InputAdornment>}}
           />
           <Box sx={{height:48,width:48,backgroundColor: theme.palette.primary.main,borderRadius:1.5}}>
         <Stack sx={{height:"100%", width:"100%", alignItems:"center",
        justifyContent:"center"}}>
         <IconButton>
          <PaperPlaneTilt color="#fff"/>
         </IconButton>
         </Stack>
        </Box>
        </Stack>
        
      </Box>
  )
}

export default Footer