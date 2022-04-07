import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import {
  Paper,
  Stack,
  Switch,
  Box,
  Link,
  Typography,
  Dialog,
  DialogTitle,
  IconButton
} from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const backGrid = "linear-gradient(45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.005) 50%, rgba(255, 255, 255, 0) 52%), linear-gradient(-45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.005) 50%, rgba(255, 255, 255, 0) 52%)";
export const boxShadow = "0 0 25px 2px rgb(0 0 0 / 5%)";
export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    color: '#262626',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#2ECA45',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#000',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const CustomTab = ({ text, padding, tabValue, setTabValue, position }) => {
  return (
    text.map((data, index) => (
      <Box key={index} onClick={() => setTabValue(index)}>
        {position === "top" &&
          <Stack direction="row" justifyContent="center" alignItems="flex-start">
            <Paper sx={{ background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)", width: "50px", height: "7px", borderRadius: "0 0 6px 6px", display: `${tabValue === index ? "" : "none"}` }}></Paper>
          </Stack>
        }
        <Stack direction="row" justifyContent="center" sx={{ p: `${position === "top" ? tabValue === index ? padding : padding + 7 : padding}px 0 ${position === "top" ? padding : tabValue === index ? padding : padding + 7}px` }}>
          <Link underline='none'><Typography align='center' sx={{ fontSize: "18px", color: `${tabValue === index ? "#34F14B" : "#7E8B74"}` }}>{data}</Typography></Link>
        </Stack>
        {position === "bottom" &&
          <Stack direction="row" justifyContent="center" alignItems="flex-start">
            <Paper sx={{ background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)", width: "50px", height: "7px", borderRadius: "0 0 6px 6px", display: `${tabValue === index ? "" : "none"}` }}></Paper>
          </Stack>
        }
      </Box>
    ))
  );
}

export const CAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  background: 'transparent'
}));

export const CAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'transparent'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export const CAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
  },
}));

export const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          {children}
          {onClose ? (
              <IconButton
                  aria-label="close"
                  onClick={onClose}
                  sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                  }}
              >
                  <CloseIcon />
              </IconButton>
          ) : null}
      </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};