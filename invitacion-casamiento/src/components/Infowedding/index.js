import React from "react";
import FaturesWedding from "./FeaturesWedding";
import ConfirmedAttendance from "./ConfirmedAttendance";
import CountDown from "./Countdown";

const InfoWedding = () => (
  <div id="info-weding">
    <CountDown />
    <FaturesWedding />
    <ConfirmedAttendance />
  </div>
);

export default InfoWedding;
