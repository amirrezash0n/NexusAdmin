// components/errors/BaseErrorPage.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

type BaseErrorPageProps = {
  code: number | string;
  title: string;
  message: string;
  showHomeButton?: boolean;
  animationType?: "wave" | "bounce" | "none";
};

export const BaseErrorPage = ({
  code,
  title,
  message,
  showHomeButton = true,
  animationType = "wave",
}: BaseErrorPageProps) => {
  const renderAnimatedCode = () => {
    return String(code)
      .split("")
      .map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={getAnimation(animationType, i)}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ));
  };

  const getAnimation = (type: string, index: number) => {
    switch (type) {
      case "wave":
        return {
          y: [0, -15, 0],
          rotate: [0, index % 2 ? -10 : 10, 0],
        };
      case "bounce":
        return {
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Container with max-width for better large screen display */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Animated Code */}
        <div className="mb-6 md:mb-12 text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold text-gray-800 dark:text-gray-200">
            {renderAnimatedCode()}
          </h1>
        </div>

        {/* Content */}
        <div className="text-center max-w-md mx-auto px-4 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
            {message}
          </p>

          {showHomeButton && (
            <Button
              asChild
              className="px-6 py-3 sm:px-8 sm:py-4 text-base bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80"
            >
              <NavLink to="/" className="text-white">
                Return to Homepage
              </NavLink>
            </Button>
          )}
        </div>
      </div>

      {/* Background Elements - Adjusted for mobile */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-rose-500/10 dark:bg-rose-500/20 rounded-full filter blur-xl sm:blur-3xl"></div>
      </div>
    </div>
  );
};
