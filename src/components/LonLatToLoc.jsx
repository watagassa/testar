import { useState, useEffect } from "react";
import { openReverseGeocoder } from "https://cdn.skypack.dev/@geolonia/open-reverse-geocoder@latest";
export const LonLatToLoc = () => {
    const [citycode, setCitycode] = useState();
    // データが変更されたらローカルストレージに保存  
    useEffect(() => {
        localStorage.setItem("citycode", citycode);
    }, [citycode]);
    useEffect(() => {
        async function fetchData() {

            //navigator.geolocation.getCurrentPosition(resolve, reject);をawaitで使うためのpromise
            let position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(lat, lon);
            await openReverseGeocoder([lon, lat]).then(result => {
                console.log(result.code);
                setCitycode(result.code);
            })
        }
        fetchData();
    }, []);
}

