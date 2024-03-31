"use client";
import { NextUIProvider } from "@nextui-org/react";
const UiComponentProvider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UiComponentProvider;