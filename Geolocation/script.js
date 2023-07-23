if ("geolocation" in navigator) {
    // Get the user's geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude+" "+longitude);
        // Do something with the latitude and longitude data
      },
      (error) => {
        // Error callback
        console.error("Error fetching geolocation:", error.message);
      }
    );
  } else {
    // Geolocation is not available
    console.error("Geolocation is not supported in this browser.");
  }