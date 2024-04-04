import { Citycodes } from "./Citycodes";
import { useState, useEffect } from "react";
import React from 'react';
export const WitchCode = () => {
    const [cityName, setCityName] = React.useState("");
    
    const  handleChange1 = (event) => {
        setCityName(event.target.value);
    }
    const handleClick = () => {
        Citycodes.map((value) => {
            (value.pref + value.city === cityName) ? console.log(value.code) : console.log("no");
        });
    }

    return (
        <> 
            <input type="text" name="city"  onChange={handleChange1}></input>
            <input type="button" onClick={handleClick} value="ここを押すとlogにcitycode"></input>
            <p>コピー用</p>
            <p> 北海道札幌市中央区 01101</p>
            <p> 福島県岩瀬郡鏡石町 07342</p>
        </>
    );
}