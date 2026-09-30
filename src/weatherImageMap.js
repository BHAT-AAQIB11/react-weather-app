import darkClouds from "./images/darkClouds.png";
import clouds from "./images/clouds.png";
import clear from "./images/clear.png";
import transparent from "./images/transparent.png";

export const weatherImageMap = {
  //ThunderStorm
  200: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    40,
  ],
  201: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    150,
  ],
  202: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    200,
  ],
  210: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
  ],
  211: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
  ],
  212: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
  ],
  221: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
  ],
  230: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  231: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    50,
  ],
  232: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #33415a 80%, rgb(165, 165, 165))",
    },
    70,
  ],
  300: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  301: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  302: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  310: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  311: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  312: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    40,
  ],
  313: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    40,
  ],
  314: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    40,
  ],
  321: [
    clouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    40,
  ],
  //Rain
  500: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    30,
  ],
  501: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #32466c 80%, rgb(98, 98, 98))",
    },
    60,
  ],
  502: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #24324d 80%, rgb(98, 98, 98))",
    },
    120,
  ],
  503: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #24324d 80%, rgb(98, 98, 98))",
    },
    170,
  ],
  504: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #24324d 80%, rgb(98, 98, 98))",
    },
    250,
  ],
  511: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    60,
  ],
  520: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  521: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    20,
  ],
  522: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    60,
  ],
  531: [
    darkClouds,
    {
      imageFilter: "brightness(110%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    120,
  ],
  //Snow
  600: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [1.0, 3.0],
    },
  ],
  601: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #32466c 80%, rgb(98, 98, 98))",
    },
    {
      radius: [2, 3],
      speed: [3.0, 3.0],
    },
  ],
  602: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #32466c 80%, rgb(98, 98, 98))",
    },
    {
      radius: [2, 3],
      speed: [4.0, 5.0],
    },
  ],
  611: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  612: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  613: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  614: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  615: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  616: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  620: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [1.0, 3.0],
    },
  ],
  621: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #4c6188 80%, rgb(165, 165, 165))",
    },
    {
      radius: [1, 1.5],
      speed: [4.0, 5.0],
    },
  ],
  622: [
    darkClouds,
    {
      imageFilter: "brightness(120%)",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
      background: "linear-gradient(to bottom, #32466c 80%, rgb(98, 98, 98))",
    },
    {
      radius: [2, 3],
      speed: [4.0, 5.0],
    },
  ],
  //Clear
  800: [
    clear,
    {
      background:
        "linear-gradient(to bottom,hsl(212, 63%, 55%) 80%, rgb(208, 208, 208))",
      imageFilter: "brightness(105%)",
      animation: "none",
    },
  ],
  //Clouds
  801: [
    clouds,
    {
      background: "linear-gradient(to bottom, #465a6f 80%, rgb(135, 134, 134))",
      imageFilter: "brightness(90%)",
      imageWidth: "130%",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
    },
  ],
  802: [
    clouds,
    {
      background: "linear-gradient(to bottom, #3e4d5d 80%, rgb(135, 134, 134))",
      imageFilter: "brightness(70%)",
      imageWidth: "130%",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
    },
  ],
  803: [
    darkClouds,
    {
      background: "linear-gradient(to bottom, #2d3843 80%, rgb(101, 101, 101))",
      imageFilter: "brightness(60%)",
      imageWidth: "130%",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
    },
  ],
  804: [
    darkClouds,
    {
      background: "linear-gradient(to bottom, #1d242b 80%, rgb(117, 116, 116))",
      imageFilter: "brightness(40%)",
      imageWidth: "130%",
      animation: `zoomIn 2s ease 1 forwards,
    animeOnScroll 145s linear infinite`,
    },
  ],

  701: [
    transparent,
    {
      background: "linear-gradient(to bottom, #6787c2 80%, rgb(165, 165, 165))",
    },
  ],
  711: [
    transparent,
    {
      background: "linear-gradient(to bottom, #43577e 80%, rgb(165, 165, 165))",
    },
  ],
  721: [
    transparent,
    {
      background: "linear-gradient(to bottom, #987739 80%, rgb(165, 165, 165))",
    },
  ],
  731: [
    transparent,
    {
      background: "linear-gradient(to bottom, #ad8d51 80%, rgb(165, 165, 165))",
    },
  ],
  751: [
    transparent,
    {
      background: "linear-gradient(to bottom, #ab8132 80%, rgb(165, 165, 165))",
    },
  ],
  741: [
    transparent,
    {
      background: "linear-gradient(to bottom, #5482b3 80%, rgb(165, 165, 165))",
    },
  ],
  762: [
    transparent,
    {
      background: "linear-gradient(to bottom, #8b6648 80%, rgb(165, 165, 165))",
    },
  ],
  771: [
    transparent,
    {
      background: "linear-gradient(to bottom, #4c6477 80%, rgb(165, 165, 165))",
    },
  ],
  781: [
    darkClouds,
    {
      background: "linear-gradient(to bottom, #3d4d5b 80%, rgb(165, 165, 165))",
    },
  ],
};
