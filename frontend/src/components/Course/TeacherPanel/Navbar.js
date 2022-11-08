import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

import Header from "../../Header";
const Navbar = () => {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
<Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
  text-align="top"
  >
  <Tab value="one" label="Item One" />
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>
    );
}
export default Navbar;