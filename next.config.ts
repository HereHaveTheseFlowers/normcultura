import type { NextConfig } from "next";
const {
  mobileBreakpoint,
  tabletBreakpoint,
  smBreakpoint,
} = require("./app/variables.mjs");

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$mobile-breakpoint: ${mobileBreakpoint}px; $tablet-breakpoint: ${tabletBreakpoint}px; $sm-breakpoint: ${smBreakpoint}px;`,
  },
};

export default nextConfig;
