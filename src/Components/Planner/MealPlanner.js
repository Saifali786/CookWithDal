import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MDBContainer } from "mdb-react-ui-kit";

/* Author : Parul Raich */

const MealPlanner = () => {
  const events = [
    {
      title: "Event 1",
      start: "2023-04-06",
      end: "2023-04-06",
    },
    {
      title: "Event 2",
      start: "2023-04-06",
      end: "2023-04-06",
    },
    {
      title: "Event 3",
      start: "2023-04-07",
      end: "2023-04-07",
    },
  ];

  const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(2),
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    height: "calc(100% - 60px)",
    maxWidth: "none",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "white",
  }));

  function renderEventContent(eventInfo) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i> */}
        <img
          src="https://picsum.photos/200"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    );
  }
  return (
    <StyledContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
      />
    </StyledContainer>
  );
};

export default MealPlanner;
