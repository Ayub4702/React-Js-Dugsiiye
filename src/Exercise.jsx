import { useEffect, useState } from "react";

function MyWindow() {
  const [size, setSeize] = useState({ y: 0, x: 0 });

  useEffect(() => {
    const sizeHandle = (e) => {
      setSeize({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", sizeHandle), [];
  });

  return (
    <div>
      <p>Y: {size.x}</p>
      <p>X: {size.y}</p>
    </div>
  );
}

export default MyWindow;
