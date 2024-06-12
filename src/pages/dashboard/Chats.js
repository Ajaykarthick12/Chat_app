import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import React from 'react';
import { Faker, faker } from "@faker-js/faker"
import { styled, alpha } from '@mui/material/styles';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { ChatList } from "../../data"
import { useTheme } from '@emotion/react';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: "100%",
      borderRadius: 1,
      backgroundColor:theme.palette.mode === "light" ? "#fff":  theme.palette.background.paper,
      alignItems: "center",
    }}
      p={2}>

      <Stack direction="row" alignItems={'center'} justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {online ?
            <StyledBadge overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot">
              <Avatar src={Faker} />
            </StyledBadge>
            : <Avatar src={Faker} />}

          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>
              {name}
            </Typography>
            <Typography variant='caption'>
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant='caption'>
            {time}
          </Typography>
          <Badge color='primary' badgeContent={unread}>

          </Badge>
        </Stack>

      </Stack>

    </Box>
  )
}
const Chats = () => {
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));



  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      //   borderRadius:'2px solid black',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },

  }));
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", width: "320px", backgroundColor:theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
      <Stack padding={3} spacing={2} sx={{height:"100vh",}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant='h5'>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholders="Search..." inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>
        <Stack spacing={1}>
          {/* <Arcived size={24}/> */}
          <Stack direction="row" alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button >Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack spacing={4} direction="column" sx={{flexGrow:1,overflow:"scroll",height:"100%"}}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement {...el} />
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} />
            })}
          </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Chats