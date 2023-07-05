import react,{useState} from 'react'
import {Drawer,IconButton,List,ListItemButton,ListItemIcon,ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
const pages=["AboutUS" , "ContactUS"]
export default function DrawerComponent(){
    const [open,setOpen]=useState(false);
    return(
      <>
        <Drawer anchor='left' open={open} onClose={()=>setOpen(false)} PaperProps={{sx:{backgroundColor : "pink",color:'green'}}}>
          <List>
           {
             pages.map((item,index)=>{
                return <ListItemButton key={index} >
                    <ListItemIcon>
                        <ListItemText textColor='red'>{item}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
             })
           }
          </List>
        </Drawer>
        <IconButton sx={{ml:'auto' , color:'white'}} onClick={()=>setOpen(!open)}>
            <MenuIcon />
        </IconButton>
      </>
    )
}