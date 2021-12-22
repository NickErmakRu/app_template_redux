import React from "react";

const {
  Provider: AppServiceProvider,
  Consumer: AppServiceConsumer,
} = React.createContext();

export { AppServiceConsumer, AppServiceProvider };
