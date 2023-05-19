"use client";
import { Icon } from "@iconify/react";

import { RoughNotation } from "react-rough-notation";
import { NavigationItem, NavigationItemType } from "@/types/navigation";
import { Button } from "@/components";
import { Animate } from "@/components/Animate.component";

const ACTIONS: Array<NavigationItem> = [
  {
    type: NavigationItemType.LINK,
    href: "/nomads",
    icon: <Icon className="mr-3" icon="feather:flight" />,
    text: "Diventa un programmatore nomade",
    external: true,
  },
  {
    type: NavigationItemType.LINK,
    href: "https://youtube.com/@giuppidev",
    icon: <Icon className="mr-3" icon="feather:youtube" />,
    text: "Youtube",
    external: true,
  },
  {
    type: NavigationItemType.LINK,
    external: true,
    href: "https://github.com/giuppidev",
    icon: <Icon className="mr-3" icon="feather:github" />,
    text: "GitHub",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-gray-800 dark:text-white text-5xl md:text-7xl  tracking-tight font-extrabold">
          Ciao <span className="inline-block origin-70 animate-wave">👋</span>{" "}
          sono{" "}
          <RoughNotation
            type="bracket"
            brackets={["left", "right"]}
            animate
            animationDelay={800}
            show
            strokeWidth={4}
            color="#E42F2F"
          >
            Giuppi
          </RoughNotation>
          .
        </h1>
        <p className="max-w-xs mt-4 md:mt-8 mx-auto  text-gray-600 text-lg md:text-4xl md:max-w-3xl dark:text-white ">
          Sono uno{" "}
          <RoughNotation
            type="highlight"
            animate
            animationDelay={1900}
            strokeWidth={4}
            show
            color="#FFDE59"
          >
            <span className="dark:text-gray-600">sviluppatore</span>
          </RoughNotation>{" "}
          web, <br className="block lg:hidden" />
          <RoughNotation
            type="highlight"
            show
            animate
            animationDelay={2800}
            strokeWidth={4}
            color="#FFDE59"
          >
            <span className="dark:text-gray-600">insegno coding</span>
          </RoughNotation>{" "}
          online e vivo da <br className="block lg:hidden" />
          <RoughNotation
            type="highlight"
            animate
            show
            animationDelay={3600}
            strokeWidth={4}
            color="#FFDE59"
          >
            <span className="dark:text-gray-600">nomade</span>
          </RoughNotation>{" "}
          digitale.
          <br /> In sintesi, sono un <br className="block lg:hidden" />
          <RoughNotation
            type="box"
            animate
            show
            padding={0}
            animationDelay={4500}
            strokeWidth={4}
            brackets={["left", "right"]}
            color="#0D9488"
          >
            programmatore nomade
          </RoughNotation>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
          {ACTIONS.map((action, index) => {
            if (action.type !== NavigationItemType.LINK) return null;

            return (
              <Animate
                animation={{
                  y: [50, 0],
                  opacity: [0, 1],
                }}
                className="w-full sm:w-auto"
                key={index}
                transition={{
                  delay: 0.1 * (index + 2) + 0.1,
                }}
              >
                <Button.Outline href={action.href} external={action.external}>
                  {action.icon}
                  <span>{action.text}</span>
                </Button.Outline>
              </Animate>
            );
          })}
        </div>
      </div>
    </div>
  );
}
