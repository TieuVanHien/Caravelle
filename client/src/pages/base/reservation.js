import {
  Narrow,
  reservation1,
  reservation2,
  reservation3,
  reservation4,
} from "../../images";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { ReservationModal } from "../../components";

export const Reservation = () => {
  const [open, handleOpen] = useState(false);
  return (
    <div className="container">
      <div className="reservation-box">
        <div className="reservation-header">
          <h1>Welcome</h1>
        </div>

        {/* Text Reservation */}

        <div className="reservation-text">
          <p>
            Located in the heart of Litile Italy, Sorrento restaurant pizzeria
            bring sleek modern design
            <img className="narrow-img" src={Narrow} alt="Narrow" />
            <Button
              onClick={() => handleOpen(true)}
              className="reservation-line-button"
            >
              Make Reservation
            </Button>
            {open && <ReservationModal OpenModal={handleOpen} />}
          </p>
        </div>

        {/* Image Reservation */}

        <div className="reservation-images">
          <img className="model-left" src={reservation1} alt="model" />
          <img className="model-right" src={reservation2} alt="model" />
          <img className="model-right2" src={reservation3} alt="model" />
          <img className="model-left2" src={reservation4} alt="model" />
        </div>
      </div>
    </div>
  );
};
