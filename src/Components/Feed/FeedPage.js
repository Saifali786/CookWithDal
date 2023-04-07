import { React, useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./Feed.css";
import Grid from "@mui/material/Grid";
import "react-calendar/dist/Calendar.css";
import { MyCardComponent } from "./MyCardComponent";
import axios from "axios";
import { MDBContainer } from "mdb-react-ui-kit";

/* Author : Parul Raich*/
export default function FeedPage() {
  const navigate = useNavigate();

  // //bookmark part
  // const [bookmarkState, setBookmarkState] = useState(props.bookmarkState);

  const [isLoaded, setIsLoaded] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      await axios
        .get(`https://cook-with-dal-a3.onrender.com/api/recipe`)
        .then((response) => {
          console.log(response);
          console.log(response.data.data);
          setRecipes(response.data.data);
          setIsLoaded(true);
        });
    }
    fetchRecipes();
  }, []);

  return (
    // <div
    //   style={{
    //     margin: "50px",
    //   }}
    // >
    <MDBContainer className="py-5 h-100">
      {isLoaded ? (
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="flex-start"
          >
            {/* {console.log(recipes)} */}
            {recipes.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={item.recipe_id}>
                {/* {renderCard(item)} */}
                <MyCardComponent
                  recipe_id={item.recipe_id}
                  index={index}
                  recipe={item}
                ></MyCardComponent>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <br />
      <br />
      <div>
        <MDBBtn
          color="dark"
          onClick={() => navigate("/addrecipe")}
          style={{ height: "36px", overflow: "visible" }}
        >
          Add Recipe
        </MDBBtn>
      </div>
      {/* </div> */}
    </MDBContainer>
  );
}
