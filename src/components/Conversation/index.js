import React from 'react'
import { Stack, Box , Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment} from '@mui/material';
import {styled,useTheme} from "@mui/material/styles"
import { faker } from '@faker-js/faker';
import { CaretDown, LinkSimple, MagnifyingGlass, Phone, Smiley, VideoCamera, PaperPlaneTilt } from 'phosphor-react';
import Header from './Header';
import Footer from './ChatFooter';
const Conversation = () => {
  const theme=useTheme();
  return (
    <Stack height="100%" maxHeight="100%" width={"auto"}>
      {/* Chats Header */}
      <Header/>
      {/* msg */}
      <Box width={"100%"} sx={{ flexGrow: 1.5 }}>

      </Box>
      {/* chat footer */}
      <Footer/>
    </Stack>
  )
}

export default Conversation;
