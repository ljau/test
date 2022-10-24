import { useEffect } from "react";

export const useInitializeSessionStorage =()=>{
    useEffect(() => {
        // Access initial value from session storage
        var token = sessionStorage.getItem("tk");
        if (token == null) {
          // Initialize page views count
          token = 1;
        } else {
          // Increment count
          token = Number(token) + 1;
        }
        // Update session storage

      }, []); //No dependency to trigger in each page load
}
