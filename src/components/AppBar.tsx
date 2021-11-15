import React, {useEffect, useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BurgerMenu from "./BurgerMenu";

export default function ButtonAppBar() {
    const [title, setTitle] = useState<String>('')
    useEffect(()=> {
        let url = window.location.href.toLowerCase();
        if (url.includes("pokedex")) {
            setTitle("Pokdex")
        } else {
            setTitle("Zafari")
        }
        console.log("entrando al effect")
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BurgerMenu>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </BurgerMenu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}