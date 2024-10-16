import React from "react";
import { Html } from "@react-three/drei";
const Loading = () => {
  return (
    <Html>
      <div className="flex justify-center items-center ">
        <div className="w-20 h-20 borrder-2 border-opacity-20 boarder-blue-500  border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loading;
