import { useState } from "react";
import {Sidebar, Menu, MenuItem,useProSidebar } from 'react-pro-sidebar';
import {Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
import {Link} from 'react-router-dom';
import { tokens } from "../../themes";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item = ({to, title, selected, setSelected, icon})=>{
 const theme = useTheme();
 const colors = tokens(theme.palette.mode)
 return(
    <MenuItem
    active={selected === title}
    onClick={()=>setSelected(title)}
    icon={icon}
    component={<Link to={to}/>}
    >
    <Typography>{title}</Typography>
    </MenuItem>
 )
}

const AppSidebar = ()=>{
const theme = useTheme();
const colors = tokens(tokens(theme.palette.mode));
const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
const [selected, setSelected] = useState("Dashboard");

return(
    <Sidebar
    backgroundColor={theme.palette.primary.main}
    >
<Menu
menuItemStyles={{
    button:({active})=>{
        return {
          backgroundColor: active?  theme.palette.primary.accent: theme.palette.primary.main,
          color:active ? colors.greenAccent[500] : colors.grey[900],

      ['&:hover']: {
        backgroundColor: theme.palette.primary.accent,
          color:colors.greenAccent[500],
       }
        
    }
    }

    }}
    >
    <MenuItem  id="top-menu-item"
    onClick={()=>collapseSidebar()}
    display="flex"
    icon={<MenuOutlinedIcon/>}
        >
        {!collapsed && 
        (
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                <Typography>ADMIN</Typography>
            </Box>
        )}
    </MenuItem>

    {/* User Profile banner */}
    {!collapsed && (
            <Box mb="25px">
                <Box m="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                <img 
                width="100px" 
                height="100px" 
                src={`../../assets/profile.png`} alt="profile"
                style={{cursor:"pointer", borderRadius:"50%"}}/>
                </Box>
                <Box
                    display="block"
                    textAlign="center"
                    >
                <Typography
                variant="h5"
                fontWeight="bold"
                sx = {{m:"10px 0 0 0"}} 
                color={colors.grey[900]}
                >Emelie Chukwuma</Typography>
                <Typography variant="h5"color={colors.greenAccent[500]}>Engineering Team Lead</Typography>
                </Box>
            </Box>
        )}

        {/*MENU ITEMS  */}
        <Box >
            <Item
            to="/"
            title="Dashboard"
            selected={selected}
            setSelected={setSelected}
            icon = {<HomeOutlinedIcon/>}
            />
            {!collapsed && (<Typography
            variant="h6"
            color= {colors.grey[700]}
            sx={{m:"15px 0 5px 30px"}}
            >Data</Typography>)}

            <Item
            to="/team"
            title="Manage Teams"
            selected={selected}
            setSelected={setSelected}
            icon = {<PeopleOutlinedIcon/>}
            />
            <Item
            to="/contacts"
            title="Contacts"
            selected={selected}
            setSelected={setSelected}
            icon = {<ContactsOutlinedIcon/>}
            />
            <Item
            to="/invoices"
            title="Invoices"
            selected={selected}
            setSelected={setSelected}
            icon = {<ReceiptOutlinedIcon/>}
            />
                
            {!collapsed && (<Typography
            variant="h6"
            color= {colors.grey[700]}
            sx={{m:"15px 0 5px 30px"}}
            >Pages</Typography>)}
            
            <Item
            to="/form"
            title="Profile Form"
            selected={selected}
            setSelected={setSelected}
            icon = {<PersonOutlinedIcon/>}
            />
            <Item
            to="/calendar"
            title="Calendar"
            selected={selected}
            setSelected={setSelected}
            icon = {<CalendarTodayOutlinedIcon/>}
            />
                        <Item
            to="/faq"
            title="FAQ"
            selected={selected}
            setSelected={setSelected}
            icon = {<HelpOutlinedIcon/>}
            />

            {!collapsed && (<Typography
            variant="h6"
            color= {colors.grey[700]}
            sx={{m:"15px 0 5px 30px"}}
            >
                Charts</Typography>)}
            
            <Item
            to="/bar"
            title="Bar Chart"
            selected={selected}
            setSelected={setSelected}
            icon = {<BarChartOutlinedIcon/>}
            />
            <Item
            to="/pie"
            title="Pie Chart"
            selected={selected}
            setSelected={setSelected}
            icon = {<PieChartOutlinedIcon/>}
            />
            <Item
            to="/line"
            title="Line Chart"
            selected={selected}
            setSelected={setSelected}
            icon = {<TimelineOutlinedIcon/>}
            />
            <Item
            to="/geography"
            title="Geo Chart"
            selected={selected}
            setSelected={setSelected}
            icon = {<MapOutlinedIcon/>}
            />


        </Box>
</Menu>
</Sidebar>
);
}

export default AppSidebar;