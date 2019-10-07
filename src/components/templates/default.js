import React from 'react';
import ContainerRWD from "../rwd";
import MenuBar from "../menuBar/default";

function DefaultTemplate({children, disabledMargin}) {
  return (
    <div>
        <MenuBar />

        <ContainerRWD>
            <div style={{
                paddingTop: `${disabledMargin ? 59 : 70}px`,
            }} />

            { children }
        </ContainerRWD>
    </div>
  );
}

export default DefaultTemplate;