import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleCloseDrawer = () => {
        setOpenMenu(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpenMenu(false);
        }
    };

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            id: "home-section"
        },
        {
            text: "About",
            icon: <InfoIcon />,
            id: "about-section"
        },
        {
            text: "Countdown",
            icon: <HourglassBottomIcon />,
            id: "countdown-section"
        },
        {
            text: "Family",
            icon: <Diversity1Icon />,
            id: "family-section"
        },
        {
            text: "Reception",
            icon: <HowToRegIcon />,
            id: "reception-section"
        },
    ];

    return (
        <nav>
            <div className="navbar-links-container">
                {menuOptions.map((item) => (
                    <a key={item.text} onClick={() => scrollToSection(item.id)}>
                        {item.text}
                    </a>
                ))}
                <button className="primary-button">Bookings Now</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton 
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        '&:hover': {
                                            '& .MuiListItemText-primary': {color: 'red',},
                                            backgroundColor: '#f0f0f0',
                                        },
                                    }}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
