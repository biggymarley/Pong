import { useState } from "react";

export default function useSlideUpHook(handleOpen) {
  const [dragging, setDragging] = useState(null);

  const onMouseDown = (e) => {
    const clientY = e?.changedTouches?.[0].clientY ?? e.clientY;
    setDragging(clientY);
  };

  const onMouseUp = (e) => {
    const clientY = e?.changedTouches?.[0]?.clientY ?? e.clientY;
    if (dragging !== null && clientY < dragging) handleOpen();
    setDragging(null);
  };


return [onMouseDown, onMouseUp]

}
