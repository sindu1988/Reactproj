import React, { forwardRef } from "react";

const TextBox = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder="Type something..."
    />
  );
});

export default TextBox;