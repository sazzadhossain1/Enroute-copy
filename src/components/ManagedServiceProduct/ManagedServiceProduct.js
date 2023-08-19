import React from "react";
import { useLoaderData } from "react-router-dom";

const ManagedServiceProduct = () => {
  const getManageServiceProductApi = useLoaderData();
  console.log(getManageServiceProductApi);
  return (
    <div>
      <h1>This is manage service product</h1>
    </div>
  );
};

export default ManagedServiceProduct;
