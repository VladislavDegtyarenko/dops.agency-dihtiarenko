"use client";

import LoadingScreen from "./LoadingScreen";
import HeroScreen from "./HeroScreen";
import { useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <HeroScreen isLoadingFinished={isLoading === false} />
      {isLoading && <LoadingScreen loaded={() => setIsLoading(false)} />}
    </>
  );
};

export default Hero;
