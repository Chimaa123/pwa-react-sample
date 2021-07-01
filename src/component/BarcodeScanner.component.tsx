import React, { useEffect, useRef, useState } from "react";

function BarcodeReader() {
  const [prevCode, setPrevBarcode] = useState("");
  let scannedBarcode = "";
  const timeRef = useRef<any>();
  useEffect(() => {
    window.onkeypress = function (e) {
      let barcode = "";
      let code = e.keyCode ? e.keyCode : e.which;
      barcode = barcode + String.fromCharCode(code);
      scannedBarcode += barcode;
      clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        setPrevBarcode(scannedBarcode);
        scannedBarcode = "";
      }, 500);
    };
  }, []);

  return (
    <div>
      <p>Scanned Barcode: {prevCode}</p>
    </div>
  );
}

export default BarcodeReader;
