import React, { useState, useEffect } from "react";
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
import EventIcon from '@mui/icons-material/Event';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ContactSupport from '@mui/icons-material/ContactSupport';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpenMenu(false);
        }
    };

    const menuOptions = [
        {
            text: "Главная",
            icon: <HomeIcon />,
            id: "home-section"
        },
        {
            text: "Про нас",
            icon: <InfoIcon />,
            id: "about-section"
        },
        {
            text: "Обратный отчёт",
            icon: <HourglassBottomIcon />,
            id: "countdown-section"
        },
        {
            text: "Семья",
            icon: <Diversity1Icon />,
            id: "family-section"
        },
        {
            text: "Мероприятие",
            icon: <EventIcon />,
            id: "event-section"
        },
        {
            text: "Пожелания",
            icon: <HowToRegIcon />,
            id: "message-section"
        },
        {
            text: "Помощь",
            icon: <ContactSupport />,
            id: "footer-section"
        },
    ];

    return (
        <nav>
            <div className="navbar-sticky-button">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            {/* Drawer for mobile view */}
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
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
