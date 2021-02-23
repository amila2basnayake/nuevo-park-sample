import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LocationFind from "./LocationFind";
import { Button } from "@material-ui/core";
import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function handleUrlChange(val) {
  window.location.href = val;
}

export default ({ itemList, handleChange }) => {
  const classes = useStyles();
  const itemListLength = Object.keys(itemList).length;
  return (
    <div className={classes.root}>
      <div className="touchPadContainer">
        <Grid container alignItems="center" spacing={3}>
          {
            //TODO :  itemListLength need to check befor loop this  
            itemList.map((singleItem) => {
              if (singleItem.type === "loc") {
                return (
                  <Grid item xs={12}>
                    <LocationFind></LocationFind>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={6}>
                    <Button
                      className="button"
                      style={{ display: "block", padding: 0 }}
                      startIcon={
                        <img
                          width={70}
                          height={70}
                          src={singleItem.svgFile}
                          alt={singleItem.displayName}
                          alt=""
                        ></img>
                      }
                      onClick={(event) => {
                        if (singleItem.action == null) {
                          handleChange(singleItem.list);
                        } else {
                          handleUrlChange(singleItem.action);
                        }
                      }}
                    >
                      <div className="buttonDescription">
                        {singleItem.displayName}
                      </div>
                    </Button>
                  </Grid>
                );
              }
            })
          }
        </Grid>
      </div>
    </div>
  );
};
