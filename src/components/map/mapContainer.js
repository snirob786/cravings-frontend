import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const MapContainer = () => {
  const [value, setValue] = useState(null);
  console.log("test: ", process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3">
        <div>
          {" "}
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              value,
              onChange: setValue,
              placeholder: "Pickup location",
              isClearable: true,
              className: "w-full",
              components: { DropdownIndicator: false },
              styles: {
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#00ffff00",
                  border: "none",
                }),
              },
            }}
          />
        </div>
        <div>Google Map</div>
      </div>
    </>
  );
};

export default MapContainer;
