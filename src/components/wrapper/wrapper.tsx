import React from "react";

const wrapper = ({ children }: { children: string | any }) => {
  return (
    <div className="px-5 mx-auto sm:px-0 xl:max-w-7xl sm:w-11/12">
      {children}
    </div>
  );
};

export default wrapper;
