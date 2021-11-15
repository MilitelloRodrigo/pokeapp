import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

interface Props {
    children: JSX.Element;
}
const BurgerMenu: React.FC<Props> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
      <span
          id="basic-button"
          onClick={handleClick}
      >
        {props.children}
      </span>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/">Zafari</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/pokedex">Pokedex</Link>
                </MenuItem>
            </Menu>
        </div>
    );
};
export default BurgerMenu;