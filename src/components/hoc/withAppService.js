/* eslint-disable react/display-name */
import React from "react";
import { AppServiceConsumer } from "../appServiceContext";

const withAppService = () => (Wrapped) => {
  return (props) => {
    return (
      <AppServiceConsumer>
        {(appService) => {
          return (
            <Wrapped {...props} appService={appService} />
          );
        }}
      </AppServiceConsumer>
    );
  };
};

export default withAppService;
