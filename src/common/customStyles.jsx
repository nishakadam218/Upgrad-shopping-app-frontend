import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const CustomAppBar = styled(AppBar)({
    height: '85px',
    justifyContent: 'center',
    display: 'flex',
});

export const CustomButton = styled(Button)({
    height: '35px',
    color: '#ffff',
    background: '#f50057',
    // border: '1px solid #ffff',
    '&:hover': {
        background: "#fff",
        color: "#f50057",

    },
});

export const CustomFormTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        color: "#565656",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "32px",
        height: "46px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "4px",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1976d2",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#C8C8C8",
        borderWidth: "1px",
    },

});

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

