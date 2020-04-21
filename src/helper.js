import React from "react"
export function convertCardName(name) {
    if(name === undefined)
        return
    return name.toLowerCase().replace(/ /g, "_");
}

export const addLineBreaks = string =>
string.split('\n').map((text, index) => (
  <React.Fragment key={`${text}-${index}`}>
    {text}
    <br />
  </React.Fragment>
));