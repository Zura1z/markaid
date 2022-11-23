import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";



import Header from "../../Header";

import "./addcourse.css";

const AddCourse = () => {
    
    return (
        <div style={{}}>
        
        <Card
          style={{
            width: 400,
            backgroundColor: "purple",
          }}
        >
          <CardContent>
            
            <Typography variant="h5" component="h2" color="white">
              Object Oriented Programing
            </Typography>
            
            <Typography variant="body2" component="p" color="white">
             BS-Sec A Fall 2022
            </Typography>
          </CardContent>
          <CardActions>
          <Button variant="contained" style={{backgroundColor: "#880e4f"}}>Open Classroom</Button>

<Button variant="contained" href="#contained-buttons" style={{backgroundColor: "#b71c1c"}}>
  Remove
</Button> 
          </CardActions>
        </Card>
      </div>
        
    );
};

export default AddCourse;
