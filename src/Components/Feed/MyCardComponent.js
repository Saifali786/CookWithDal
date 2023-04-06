import React, { useState, useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {
  CardActions,
  CardActionArea,
  Menu,
  MenuItem,
  Popover,
  Box,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/material";
import { red } from "@mui/material/colors";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import LikesComments from "../LikesComments/LikesComments";
import { Row } from "react-bootstrap";
import axios from "axios";

export const MyCardComponent = (props) => {
  const { recipe_id, index, recipe } = props;
  // console.log("recipe id inside my card card component");
  // console.log(recipe_id);
  // console.log("recipe object");
  // console.log(recipe);
  // const userId = "saif@gmail.com";
  const userId = localStorage.getItem("email");
  const minDate = new Date();

  const [anchorEl, setAnchorEl] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [initialBookmarkStatus, setInitialBookmarkStatus] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkIconSelected, setIsBookmarkIconSelected] = useState(false);
  const [src, setSrc] = useState(null);


  const initialImage = recipe.image;
  console.log(initialImage);

  const image = initialImage.replace("uploads\\", "");
  console.log(image);

  const dateString = recipe.createdAt;
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCalendarClose = () => {
    setCalendarOpen(false);
  };

  const handleCalendarOpen = (event) => {
    setPopoverAnchorEl(cardRef.current);
    handleClose();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleCalendarClose();
    const convdate = selectedDate.toISOString();
    setPopoverAnchorEl(null);
  };

  const handleRecipeOpen = () => {
    navigate("/view-recipe", { state: recipe });
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkClick = async () => {
    const newBookmarkStatus = !isBookmarked;
    setIsBookmarked(newBookmarkStatus);

    // console.log("initial bookmark state");
    // console.log(initialBookmarkStatus);
    // console.log("inside bookmark click");
    // console.log(newBookmarkStatus);

    if (newBookmarkStatus !== initialBookmarkStatus) {
      if (newBookmarkStatus) {
        // console.log("inside if if");
        axios
          .put(`http://localhost:8080/api/bookmarkRecipe/bookmark/${userId}`, {
            recipe_id,
          })
          .then((response) => {
            console.log(response.data.statusMessage);
            setIsBookmarkIconSelected(true);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // console.log("else part");
        axios
          .delete(
            `http://localhost:8080/api/bookmarkRecipe/bookmark/${recipe_id}/${userId}`
          )
          .then((response) => {
            console.log(response.data.statusMessage);
            setIsBookmarkIconSelected(false);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      // console.log("inside outer else");
      axios
        .delete(
          `http://localhost:8080/api/bookmarkRecipe/bookmark/${recipe_id}/${userId}`
        )
        .then((response) => {
          console.log(response.data.statusMessage);
          setIsBookmarkIconSelected(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    // const url = "http://localhost:8080/api/recipe/images/:image";
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/images/${image}`,
          {
            responseType: "blob",
          }
        );
        console.log(response);
        setSrc(URL.createObjectURL(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [image]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/bookmarkRecipe/bookmark/${recipe_id}/${userId}`
      )
      .then((response) => {
        // console.log("inside my card component");
        // console.log(response.data.data);
        // setIsBookmarked(response.data.data);
        setInitialBookmarkStatus(response.data.data);
        setIsBookmarkIconSelected(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipe_id, userId]);

  const popoverOpen = Boolean(popoverAnchorEl);

  return (
    <Card key={index} index={index} ref={cardRef}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.name}
        subheader={formattedDate}
      />
      {anchorEl && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleCalendarOpen}>Calendar</MenuItem>
        </Menu>
      )}

      {/* {console.log("popoverAnchorEl:", popoverAnchorEl)} */}
      {popoverAnchorEl && (
        <Popover
          open={popoverOpen}
          anchorEl={popoverAnchorEl}
          onClose={handleCalendarClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          // style={{
          //   marginTop: 100,
          // }}
        >
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            onClose={handleCalendarClose}
            minDate={minDate}
          />
        </Popover>
      )}
      <CardActionArea onClick={handleRecipeOpen}>
        <CardMedia component="img" image={src} alt="Paella dish" height="400" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Box sx={{ display: 'inline-flex' }}> */}
        <LikesComments
          showLikes={false}
          showComments={true}
          recipe_id={recipe.recipe_id}
        />
        {/* </Box> */}
        <IconButton
          onClick={handleBookmarkClick}
          size="large"
          aria-label="add to bookmarks"
        >
          {/* {isBookmarked ? <Bookmark /> : <BookmarkBorder />} */}
          {/* {initialBookmarkStatus ? <Bookmark /> : <BookmarkBorder />} */}
          {isBookmarkIconSelected ? <Bookmark /> : <BookmarkBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
