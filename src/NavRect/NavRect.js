import React, { useState } from "react";
import Cube from "./Cube";
import DimenstionalSpace from "./DimensionalSpace";
import Rectangle from "./Rectangle";
import SmallerRectangle from "./SmallerRectangle";
import SideText from "./SideText";

const NavRect = () => {
  const [rotation, setRotation] = useState(0);
  return (
    <DimenstionalSpace>
      <Cube rotation={rotation}>
        <Rectangle left>
          <SmallerRectangle>
            <SmallerRectangle>
              <h2>Articles</h2>
            </SmallerRectangle>
          </SmallerRectangle>
          <SideText positioned="right" onClick={() => setRotation(0)}>
            <h2>Home</h2>
          </SideText>
        </Rectangle>

        <Rectangle front>
          <SideText positioned="left" onClick={() => setRotation(90)}>
            <h2>Articles</h2>
          </SideText>
          <SmallerRectangle>
            <SmallerRectangle>
              <h2>Home</h2>
            </SmallerRectangle>
          </SmallerRectangle>
          <SideText positioned="right" onClick={() => setRotation(-90)}>
            <h2>Contact us</h2>
          </SideText>
        </Rectangle>

        <Rectangle right>
          <SideText positioned="left" onClick={() => setRotation(0)}>
            <h2>Home</h2>
          </SideText>
          <SmallerRectangle>
            <SmallerRectangle>
              <h2>Contact us</h2>
            </SmallerRectangle>
          </SmallerRectangle>
        </Rectangle>
      </Cube>
    </DimenstionalSpace>
  );
};

export default NavRect;
