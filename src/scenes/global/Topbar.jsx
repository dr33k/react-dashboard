import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../themes";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';


const Topbar = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*SearchBar*/}
            <Box 
            display="flex" 
            backgroundColor={theme.palette.primary.main} 
            borderRadius="3px"
            color={colors.grey[900]}
            >
                <InputBase  sx={{ml:2, flex:1}} placeholder="Search" ></InputBase>
                <IconButton type="button" color={colors.grey[100]} sx={{p:1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>

            {/*ICONS*/}
            <Box display="flex"
            >
                <IconButton onClick={colorMode.toggleColorMode}>
                   {theme.palette.mode ==="dark"?(<DarkModeOutlinedIcon/>): (<LightModeOutlinedIcon/>)}
                </IconButton> 
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )

    }
    
    export default Topbar;