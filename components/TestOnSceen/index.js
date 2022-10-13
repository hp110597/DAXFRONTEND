import { useOnScreen } from 'hooks/helper';
import React, { useRef } from 'react';

const TestOnScreen = () => {
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, '0.5');
  return (
    <div>
      <div style={{ height: "500px" }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: "500px",
          backgroundColor: onScreen ? "#23cebd" : "#efefef",
        }}
          >
        {/* {onScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )} */}
        </div>
    </div>
  );
}


export default TestOnScreen