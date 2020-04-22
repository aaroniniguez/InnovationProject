import React from "react"
export function convertCardName(name) {
    if(name === undefined)
        return
    return name.toLowerCase().replace(/ /g, "_");
}

export const addLineBreaks = string => {
  let matchesNewline = string.split("\n");
  if(matchesNewline.length > 1) {
    return matchesNewline.map((text,index) => {
      return (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>)
    })
  } else {
    return (
      <React.Fragment key={`${text}-${index}`}>
        {text}
      </React.Fragment>
    )
  }
}