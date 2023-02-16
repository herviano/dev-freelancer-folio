import { ListItem, ListItemText, styled, Typography } from "@mui/material";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import ImageComponent from "../ImageComponent";

const CustomLink = styled(NavLink)(() => ({
    width: "calc(100%)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    // borderRight: "3px solid #E0E0E0",
    fontSize: 20,
    // fontWeight:"bold",
    color: "black",
    "&:hover": {
        // backgroundColor:"grey",
        // borderRight: "3px solid #78BAFE",
    },
}));
const LinkText = styled(Typography)(() => ({
   fontSize:"15px",
   fontWeight:"bold",
   display:"flex",
//    textAlign:"center",
//    justifyContent:"center",
   alignItems:"center",
//    color:"greenyellow",
    "&:hover": {
        
    },
}));
interface Props {
    title: string,
    path: string,
    iconPath:string,
}

function MyDrawerItem({title, path, iconPath}: Props) {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <ListItem key={title} disablePadding sx={{}}>
            <CustomLink to={path} sx={{height: "70px"}} style={{color: match ? "#b68b46" : ""}}>
                {/* <ListItemText primary={title} /> */}
                <LinkText><ImageComponent image={iconPath} sx={{margin:"3px"}}/>{title}</LinkText>
            </CustomLink>
        </ListItem>
    );
}

export default MyDrawerItem;