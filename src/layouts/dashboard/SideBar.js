import React, { useState } from 'react'
import {Avatar, Box, Divider, IconButton} from "@mui/material";
import {Stack} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import useSettings from '../../hooks/useSettings';
import { faker } from "@faker-js/faker";
import { Gear } from 'phosphor-react';
import AntSwitch from '../../components/AntSwitch';
const SideBar = () => {
    const theme=useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
  return (
    <Box
    p={2} sx={{ backgroundColor: theme.palette.background.paper, height: "100vh", width: 100, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
      <Stack direction="column" alignItems={"center"}
        justifyContent="space-between" sx={{ height: "100%" }} padding={2} spacing={3}>
        <Stack alignItems={"center"} spacing={3}>
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}>
            <img src={Logo} />
          </Box>
          <Stack sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}>
            {Nav_Buttons.map((el) => (
              el.index === selected ?
                <Box sx={{ background: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>{el.icon}</IconButton>

                </Box>
                : <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={el.index}>{el.icon}</IconButton>
              // <IconButton key={el.index}>{el.icon}</IconButton>
            ))}
            <Divider sx={{ width: "48px" }} />
            {
              selected === 3 ?
                <Box
                  p={1}
                  sx={{ background: theme.palette.primary.main, borderRadius: 1.5 }}>

                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
                : <IconButton
                  onClick={() => {
                    setSelected(3);
                  }} >
                  <Gear />
                </IconButton>

            }
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <AntSwitch onClick={() => {
            onToggleMode();
          }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default SideBar