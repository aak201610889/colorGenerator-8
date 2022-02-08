import React, { useEffect, useState } from 'react';
function SingleColor({ rgb, weight, hex,index }) {
  const [alert, setAlert] = useState(false);
  const bgc=rgb.join(',')
  const hexValue = `#${hex}`
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);
  
  return (
    <div
      style={{
        backgroundColor: `rgb(${bgc})`,
        color: index > 10 ? "#fff" : "#000",
      }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <h4>{weight}</h4>
      <p>{hexValue}</p>
      {alert ? <p>copied to clipboard</p> : null}
    </div>
  );
}

export default SingleColor;
