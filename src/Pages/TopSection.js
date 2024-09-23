import React, { useEffect, useRef, useState } from 'react'
import "./TopSection.css";
import './Second.css'
import './lastSection.css';
import './Footer.css'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';





const TopSection = () => {


    const scrollContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const directionRef = useRef(1); // 1 for right to left, -1 for left to right

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return; // Check if the element exists

        const scrollSpeed = 1; // Adjust the speed if necessary

        const startScrolling = () => {
            scrollIntervalRef.current = setInterval(() => {
                if (directionRef.current === 1) {
                    // Scrolling from right to left
                    if (
                        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                        scrollContainer.scrollWidth
                    ) {
                        scrollContainer.scrollLeft = 0; // Reset to start
                    } else {
                        scrollContainer.scrollLeft += scrollSpeed; // Scroll to the right
                    }
                } else {
                    // Scrolling from left to right
                    if (scrollContainer.scrollLeft <= 0) {
                        scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Reset to end
                    } else {
                        scrollContainer.scrollLeft -= scrollSpeed; // Scroll to the left
                    }
                }
            }, 10); // Adjust the interval to control scrolling speed
        };

        const stopScrolling = () => {
            clearInterval(scrollIntervalRef.current);
        };

        startScrolling();

        scrollContainer.addEventListener('mouseenter', stopScrolling);
        scrollContainer.addEventListener('mouseleave', startScrolling);

        // Cleanup function
        return () => {
            clearInterval(scrollIntervalRef.current);
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', stopScrolling);
                scrollContainer.removeEventListener('mouseleave', startScrolling);
            }
        };
    }, []);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return; // Check if the element exists

        const checkScrollDirection = () => {
            const isAtStart = scrollContainer.scrollLeft === 0;
            const isAtEnd =
                scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                scrollContainer.scrollWidth;

            if (isAtStart) {
                directionRef.current = 1; // Change direction to right to left
            } else if (isAtEnd) {
                directionRef.current = -1; // Change direction to left to right
            }
        };

        scrollContainer.addEventListener('scroll', checkScrollDirection);

        // Cleanup function
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScrollDirection);
            }
        };
    }, []);


    const scrollBoxRef = useRef(null);
    const scrollIntervalBoxRef = useRef(null);
    const directionBoxRef = useRef(1); // 1 for right to left, -1 for left to right

    useEffect(() => {
        const scrollBox = scrollBoxRef.current;

        if (!scrollBox) return; // Check if the element exists

        const scrollSpeed = 1; // Adjust the speed if necessary

        const startScrollingBox = () => {
            scrollIntervalBoxRef.current = setInterval(() => {
                if (directionBoxRef.current === 1) {
                    // Scrolling from right to left
                    if (
                        scrollBox.scrollLeft + scrollBox.clientWidth >=
                        scrollBox.scrollWidth
                    ) {
                        scrollBox.scrollLeft = 0; // Reset to start
                    } else {
                        scrollBox.scrollLeft += scrollSpeed; // Scroll to the right
                    }
                } else {
                    // Scrolling from left to right
                    if (scrollBox.scrollLeft <= 0) {
                        scrollBox.scrollLeft = scrollBox.scrollWidth; // Reset to end
                    } else {
                        scrollBox.scrollLeft -= scrollSpeed; // Scroll to the left
                    }
                }
            }, 10); // Adjust the interval to control scrolling speed
        };

        const stopScrollingBox = () => {
            clearInterval(scrollIntervalBoxRef.current);
        };

        startScrollingBox();

        scrollBox.addEventListener('mouseenter', stopScrollingBox);
        scrollBox.addEventListener('mouseleave', startScrollingBox);

        // Cleanup function
        return () => {
            clearInterval(scrollIntervalBoxRef.current);
            if (scrollBox) {
                scrollBox.removeEventListener('mouseenter', stopScrollingBox);
                scrollBox.removeEventListener('mouseleave', startScrollingBox);
            }
        };
    }, []);

    useEffect(() => {
        const scrollBox = scrollBoxRef.current;

        if (!scrollBox) return; // Check if the element exists

        const checkScrollDirectionBox = () => {
            const isAtStart = scrollBox.scrollLeft === 0;
            const isAtEnd =
                scrollBox.scrollLeft + scrollBox.clientWidth >=
                scrollBox.scrollWidth;

            if (isAtStart) {
                directionBoxRef.current = 1; // Change direction to right to left
            } else if (isAtEnd) {
                directionBoxRef.current = -1; // Change direction to left to right
            }
        };

        scrollBox.addEventListener('scroll', checkScrollDirectionBox);

        // Cleanup function
        return () => {
            if (scrollBox) {
                scrollBox.removeEventListener('scroll', checkScrollDirectionBox);
            }
        };
    }, []);


    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState({});

    const handleMenuOpen = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setOpenDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>
    );



    return (
        <div className='mainblack'>




            <Toolbar disableGutters className='toolbarstyle'>
                <div>
                    <img src="/Images/Ether.svg" alt="Logo" />
                </div>

                <div className='btndivs'>
                    <Button
                        onClick={(e) => handleMenuOpen(e, 'build')}
                        sx={{ color: 'white', padding: '0px' }}
                        className='iconcenter'
                    >
                        Build  <img src="/Images/iconbelow.svg" alt="Logo" />
                    </Button>
                    <Button
                        onClick={(e) => handleMenuOpen(e, 'community')}
                        sx={{ color: 'white', padding: '0px' }}
                        className='iconcenter'
                    >
                        Community  <img src="/Images/iconbelow.svg" alt="Logo" />
                    </Button>
                    <Button
                        onClick={(e) => handleMenuOpen(e, 'resources')}
                        sx={{ color: 'white', padding: '0px' }}
                        className='iconcenter'
                    >
                        Resources  <img src="/Images/iconbelow.svg" alt="Logo" />
                    </Button>
                    <Button
                        onClick={(e) => handleMenuOpen(e, 'product')}
                        sx={{ color: 'white', padding: '0px' }}
                        className='iconcenter'
                    >
                        Product  <img src="/Images/iconbelow.svg" alt="Logo" />
                    </Button>
                </div>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                    <IconButton
                        size="large"
                        aria-label="open drawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDrawerToggle}
                        color="inherit"

                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>

            {renderMenu}

            <Drawer

                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                    <img src="/Images/Ether.svg" alt="Drawer Logo" style={{ width: '50%', marginBottom: '16px' }} />
                </Box>
                <List sx={{ width: 250 }}>
                    <ListItem button onClick={() => setOpenDropdown({ build: !openDropdown.build })}>
                        <ListItemText primary="Build" />
                        {openDropdown.build ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdown.build} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 1" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 2" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => setOpenDropdown({ community: !openDropdown.community })}>
                        <ListItemText primary="Community" />
                        {openDropdown.community ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdown.community} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 1" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 2" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => setOpenDropdown({ resources: !openDropdown.resources })}>
                        <ListItemText primary="Resources" />
                        {openDropdown.resources ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdown.resources} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 1" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 2" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => setOpenDropdown({ product: !openDropdown.product })}>
                        <ListItemText primary="Product" />
                        {openDropdown.product ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDropdown.product} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 1" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }}>
                                <ListItemText primary="Option 2" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Drawer>




















            <div className='rowtext'>
                <div className='textdiv'>
                    <p className='text'>Harnessing Artificial Intelligence Tools for Naturally Image Generator</p>
                </div>
                <div className='coltext'>
                    <div >
                        <p className='emoji'>🔥😍👍</p>
                    </div>
                    <div>
                        <p className='small-paragraphy'>In the realm of creativity, technology has become a powerful ally for artists, writers, designers, and creators of all kinds. Artificially intelligent (AI) tools have emerged as valuable companions, assistingnaturally creative humans in their creative processes.</p>
                    </div>
                </div>
            </div>


            <div className="imagesdiv" ref={scrollContainerRef}>
                <div>
                    <img src="/Images/Eagle1.png" alt="Logo" />
                </div>
                <div className='second2images'>
                    <div>
                        <img src="/Images/300img.png" alt="Logo" />
                    </div>
                    <div >
                        <img src="/Images/wehave1.png" alt="Logo" />
                    </div>
                </div>
                <div className='third2images'>
                    <div>
                        <img src="/Images/imagecard.png" alt="Logo" />
                    </div>
                    <div>
                        <img src="/Images/try1.png" alt="Logo" />
                    </div>
                </div>
            </div>

            <div className='mainsecond'>
                <div className='logoandtext'>
                    <div>
                        <p className='poweringtext'>Powering tools and integrations from companies all around the world</p>
                    </div>
                    <div className='alllogos'>
                        <img src="/Images/brave.svg" alt="Logo" />
                        <img src="/Images/circlelogo.svg" alt="Logo" />
                        <img src="/Images/discord.svg" alt="Logo" />
                        <img src="/Images/Google.svg" alt="Logo" />
                        <img src="/Images/jump.svg" alt="Logo" />
                        <img src="/Images/loola.svg" alt="Logo" />
                        <img src="/Images/magic.svg" alt="Logo" />
                    </div>

                </div>


                <div className='boxesmain'>

                    <div className='firstblackbox'>
                        <div className='firstboxwithbtns'>
                            <div className='firsttextofbox'>
                                <p className='automated'>Automated Image Synthesis and Design</p>
                                <p className='automatedsmall'>With AI-powered image generation, designers and creatives can streamline their workflows and unlock new levels of efficiency.</p>
                            </div>
                            <div className='buttondivthree'>
                                <button className='btndesign'><img src="/Images/Youtube.svg" alt="Youtube" className='btnimg' /></button>
                                <button className='btndesign'><img src="/Images/Podcast.svg" alt="Podcast" className='btnimg' /></button>

                            </div>
                        </div>
                    </div>

                    <div className='secblackbox'>
                        <div className='firstboxwithbtns'>
                            <div className='firsttextofsecbox'>
                                <p className='create'>Create stunning visual in seconds</p>
                                <p className='createsmall'>Generating innovative ideas is a crucial aspect of any creative endeavor. AI tools can help spark inspiration by analyzing vast amounts of data</p>
                            </div>
                            <div className='buttomininput'>
                                <div>
                                    <input className='Email-input' placeholder='Write Prompt to generate image' /></div>
                                <div>
                                    <button className='buttomininputdesign'>Generate</button></div>
                            </div>
                            <button className='buttomininputdesignnone'>Generate</button>

                        </div>
                    </div>

                </div>


                <div className='maincommunity'>
                    <div>
                        <p className='community'>Join a community of millions.</p>
                    </div>

                    <div className='accountsnumber'>
                        <div>
                            <p className='plusnumber'>10.2M+</p>
                            <p className='plusinner'>ACTIVE ACCOUNTS</p>
                        </div>

                        <div>
                            <p className='plusnumber'>300+</p>
                            <p className='plusinner'>PROJECTS</p>
                        </div>

                        <div>
                            <p className='plusnumber'>1000+</p>
                            <p className='plusinner'>TOPICS</p>
                        </div>
                    </div>
                </div>

            </div>




            <div className='lastmain'>
                <div className='journeydiv'>
                    <p className='journey'>Journey Through Art of Community</p>
                </div>
                <div className='bottomimages' ref={scrollBoxRef}>
                    <div>
                        <img src="/Images/scenery.svg" alt="Scenery" />
                    </div>
                    <div className='center2images'>
                        <div>
                            <img src="/Images/car.svg" alt="Car" />
                        </div>
                        <div>
                            <img src="/Images/48000.svg" alt="48000" />
                        </div>
                    </div>
                    <div>
                        <img src="/Images/snow.svg" alt="Snow" />
                    </div>
                </div>




            </div>


            <div className='footermain'>
                <div className='footerleftside'>
                    <div>
                        <img src="/Images/Etherbottom.svg" alt="Logo" />
                    </div>
                    <p className='managed'>Managed by Artificial Intelligence</p>
                    <div className='socialmediaimages'>
                        <img src="/Images/Yt.svg" alt="Logo" />
                        <img src="/Images/twitter.svg" alt="Logo" />
                        <img src="/Images/git.svg" alt="Logo" />
                        <img src="/Images/monkey.svg" alt="Logo" />
                        <img src="/Images/github.svg" alt="Logo" />
                        <img src="/Images/telegram.svg" alt="Logo" />
                    </div>
                </div>

                <div className='footerrightside'>
                    <div className='etherfirstdiv'>
                        <p className='etherfooterheading'>Ether</p>
                        <p className='etherfirstfooterunder'>Grants</p>
                        <p className='etherfooterunder'>Generator</p>
                        <p className='etherfooterunder'>Careers</p>
                        <p className='etherfooterunder'>Disclaimer</p>
                    </div>
                    <div className='connectedsecdiv'>
                        <p className='etherfooterheading'>Get Connected</p>
                        <p className='etherfirstfooterunder'>Services</p>
                        <p className='etherfooterunder'>Blog</p>
                        <p className='etherfooterunder'>Newsletter</p>

                    </div>
                </div>
            </div>








        </div>
    )
}

export default TopSection
