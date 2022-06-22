import React, { useState, useEffect } from "react";

export default function Example() {
  useEffect(() => {
    const sendSmsVerification = async (phoneNumber) => {
      try {
        const data = JSON.stringify({
          to: "+66945926126",
          channel: "sms",
        });
        console.log("data", data);

        const response = await fetch(
          `${"https://verify-1234-abcdef.twil.io"}/start-verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: data,
          }
        );
        console.log("response", response);

        const json = await response.json();
        return json.success;
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    sendSmsVerification();
  }, []);

  return <div></div>;
}
