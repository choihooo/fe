import Lottie from "lottie-react";
import loadingAnimation from "@/lottie/loading.json";

export default function Loading() {
  return <Lottie animationData={loadingAnimation} loop={true} />;
}
