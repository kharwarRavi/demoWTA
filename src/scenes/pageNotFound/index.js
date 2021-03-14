import React from "react";
import LinkView from "../../components/linkView";
// import { Typography, Grid } from "@material-ui/core";

const PageNotFound = () => (
//   <Grid container direction="column" justify="center" align="center">
//     <Typography variant="h6">Error 404: Page not found</Typography>
    <LinkView to="/" title="Back to home" />
//   </Grid>
);

export default PageNotFound;
