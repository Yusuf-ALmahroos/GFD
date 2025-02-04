import React , {useState}  from "react";

import { 
  Box,
  Stack,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  Menu,
  Typography,
  IconButton
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const inputStyling =
{
  backgroundColor: 'fontColor1.main',
  textAlign:       'left'
}

export function SmallInputSelect (props)
{
  return(
      <Box sx = {{width: props.boxWidth}}>
        <TextField 
        sx        = {inputStyling} 
        color     = 'primary' 
        value     = {props.value} 
        onChange  = {props.onChange}
        
        variant   = "standard"
        slotProps = {{
          input: {
            startAdornment: (
              <InputAdornment position = "start">
                {props.icon}
              </InputAdornment>
            ),
          },
        }}
        select 
         >
        {
          props.options.map((option, index) => 
          ( 
            <MenuItem key = {index} value = {option}>
              {option}
            </MenuItem>
          ))
        }
        </TextField>
      </Box>
  )
}

export function DropdownMenu(props)
{
  const [anchorEl, setAnchorEl] = useState(null);
  const [initialValue, _]       = useState(props.value); 

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleDone = () => setAnchorEl(null);
  const handleCancle = () => 
  {
    setAnchorEl(null);
    props.onChange(initialValue);
  }

  const handleIncrement = (item) => 
  {
    props.onChange({ ...props.value, [item]: (props.value[item] || 0) + 1 });
  };
  const handleDecrement = (item) => 
  {
    props.onChange({ ...props.value, [item]: Math.max((props.value[item] || 0) - 1, 0) });
  };

  const totalCount = Object.values(props.value).reduce((acc, count) => acc + count, 0);

  return (
    <div>
      <Button 
        variant   = "text"
        onClick   = {handleClick}
        startIcon = {props.icon}
        endIcon   = {<ArrowDropDownIcon/>}
        sx={{color:  '#595D61'}}
      >
        {props.buttonLabel} {totalCount > 0 ? `(${totalCount})` : ""}
      </Button>

      <Menu 
        anchorEl = {anchorEl} 
        open     = {open} 
        onClose  = {handleClick}
      >
        {props.options.map((item) => 
        {
          return (
            <MenuItem key = {item} disableRipple>
              <Box display = "flex" alignItems = "center" justifyContent = "space-between" width = "100%">
                <Typography>{item}</Typography>
                <Box display  = "flex" alignItems = "center">
                  <IconButton size = "small" onClick = {() => handleDecrement(item)}>
                    <RemoveIcon fontSize = "small" />
                  </IconButton>
                  <Typography sx = {{ mx: 1 }}>{props.value[item] || 0}</Typography>
                  <IconButton size = "small" onClick={() => handleIncrement(item)}>
                    <AddIcon fontSize = "small" />
                  </IconButton>
                </Box>
              </Box>
            </MenuItem>
          )
        })}
        <MenuItem disableRipple>
          <Box display = "flex" justifyContent="space-between" width = "100%">
            <Button onClick = {handleCancle} variant = "outlined" color = "primary">Cancel</Button>
            <Button onClick = {handleDone} variant = "outlined" color="primary">Done</Button>
          </Box>
        </MenuItem>
      </Menu>
    </div>
  )
}
