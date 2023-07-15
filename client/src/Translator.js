import React, { useState } from 'react';
import axios from 'axios';
//const {Translate} = require('@google-cloud/translate').v2;

function Translator() {
  const API_KEY = 'AIzaSyDd3l4TV_09uXFK5FYmiMk9czMDToGMVLI';
  async function translate(text) {
    let res = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    { q: text, target: "id" }
    );
    let translation = res.data.data.translations[0].translatedText;
    console.log(translation)
    return translation;
  }

  var id = translate("good morning");
  console.log(id);

  return(
    <div>
      <p>this is a temporary page to test translation</p>
      <p>{id}</p>
    </div>
  );
}

export default Translator;