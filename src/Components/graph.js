import React from "react";
import { VictoryPie } from "victory-pie";
const Graph = () => {
  const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
  ];
 
  return (
    <>
      <h1>Food Ratings</h1>
      <div style={{ height: 400 }}>
        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red"]}
          radius={100}
        />
      </div>
    </>
  );
};
export default Graph;
