import React from 'react';
import { Progress } from "@material-tailwind/react";

function ProgressBar(props) {
    return (
        <div>
   <Progress value={props.value} color="amber" />
    </div>
    );
}

export default ProgressBar;