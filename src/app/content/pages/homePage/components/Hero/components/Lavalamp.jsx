import React, { Component } from "react";
import { TweenMax, TimelineMax, Sine } from "gsap";

export default class extends Component {
  componentDidMount() {
    function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var tl = new TimelineMax();

    for (var i = 0; i < 6; i++) {
      var t = TweenMax.to(
        document.querySelector("#blob" + i),
        randomBetween(45, 70), // adjust speed
        {
          y: 300,
          repeat: -1,
          repeatDelay: randomBetween(0.5, 1),
          useFrames: true,
          yoyoEase: true,
          ease: Sine.easeIn
        }
      );

      tl.add(t, i + 1);
    }

    tl.seek(300);

    tl.timeScale(1.5);
  }
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        id="lavaLamp"
        enableBackground="new 0 0 400 400"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -9"
              result="cm"
            />
          </filter>
          {/* <radialGradient
            id="bgGrad"
            cx="300"
            cy="300"
            r="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="7.142857e-002" style={{ stopColor: "#471A19" }} />
            <stop offset="0.3107" style={{ stopColor: "#290F0E" }} />
            <stop offset="0.553" style={{ stopColor: "#120706" }} />
            <stop offset="0.7828" style={{ stopColor: "#050202" }} />
            <stop offset="0.9847" style={{ stopColor: "#000000" }} />
          </radialGradient> */}

          <clipPath id="glassMask">
            <rect width="100vw" height="100vh" id="glassShape" />
          </clipPath>

          {/* <!-- BLOB GRADIENTS --> */}
          <radialGradient
            id="blob0_2_"
            cx="292"
            cy="171.5"
            r="56.5354"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: "#FF9C12" }} />
            <stop offset="0.1922" style={{ stopColor: "#FA9712" }} />
            <stop offset="0.3992" style={{ stopColor: "#ED8A14" }} />
            <stop offset="0.6186" style={{ stopColor: "#D67316" }} />
            <stop offset="0.8449" style={{ stopColor: "#B65419" }} />
            <stop offset="1" style={{ stopColor: "#9C3A1C" }} />
          </radialGradient>
          <radialGradient
            id="blob1_2_"
            cx="297"
            cy="167.5"
            r="37.2156"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: "#FF9C12" }} />
            <stop offset="0.1922" style={{ stopColor: "#FA9712" }} />
            <stop offset="0.3992" style={{ stopColor: "#ED8A14" }} />
            <stop offset="0.6186" style={{ stopColor: "#D67316" }} />
            <stop offset="0.8449" style={{ stopColor: "#B65419" }} />
            <stop offset="1" style={{ stopColor: "#9C3A1C" }} />
          </radialGradient>
          <radialGradient
            id="blob2_2_"
            cx="294"
            cy="157"
            r="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: "#FF9C12" }} />
            <stop offset="0.1922" style={{ stopColor: "#FA9712" }} />
            <stop offset="0.3992" style={{ stopColor: "#ED8A14" }} />
            <stop offset="0.6186" style={{ stopColor: "#D67316" }} />
            <stop offset="0.8449" style={{ stopColor: "#B65419" }} />
            <stop offset="1" style={{ stopColor: "#9C3A1C" }} />
          </radialGradient>

          <radialGradient
            id="blob3_2_"
            cx="291.9382"
            cy="167.4587"
            r="41.0767"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: "#FF9C12" }} />
            <stop offset="0.1922" style={{ stopColor: "#FA9712" }} />
            <stop offset="0.3992" style={{ stopColor: "#ED8A14" }} />
            <stop offset="0.6186" style={{ stopColor: "#D67316" }} />
            <stop offset="0.8449" style={{ stopColor: "#B65419" }} />
            <stop offset="1" style={{ stopColor: "#9C3A1C" }} />
          </radialGradient>
          <radialGradient
            id="blob4_2_"
            cx="306.5"
            cy="155"
            r="14.109"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: "#FF9C12" }} />
            <stop offset="0.1922" style={{ stopColor: "#FA9712" }} />
            <stop offset="0.3992" style={{ stopColor: "#ED8A14" }} />
            <stop offset="0.6186" style={{ stopColor: "#D67316" }} />
            <stop offset="0.8449" style={{ stopColor: "#B65419" }} />
            <stop offset="1" style={{ stopColor: "#9C3A1C" }} />
          </radialGradient>
          {/* <!-- END BLOB GRADIENTS--> */}
        </defs>

        <g filter="url(#goo)" id="blobs" clipPath="url(#glassMask)">
          <path
            id="blob0"
            fill="url(#blob0_2_)"
            d="M326.2,149.5c-5,19.2-21.4,29.2-37.8,26.6c-16.5-2.9-33.4-12.9-37.1-26.6
    c-3.8-13.6,12.5-32.1,37.8-34.9C314.4,111.8,331.3,130.4,326.2,149.5z"
          />

          <path
            id="blob1"
            fill="url(#blob1_2_)"
            d="M320.5,146.4c-4.4,10.1-16.4,20.2-26.8,25.3c-10.4,5.2-22.4-2.9-26.8-15.2
    c-4.4-11.6,7.6-20.4,26.8-25.3C312.9,126.3,324.9,135.6,320.5,146.4z"
          />

          <path
            id="blob2"
            fill="url(#blob2_2_)"
            d="M278,147.7c2.7-7.1,9.4-15.7,15.4-16.4c5.9-0.4,12.6,8.5,15.4,16.9
    c2.7,8.4-4.2,14.9-15.4,14.2C282.2,161.5,275.3,154.8,278,147.7z"
          />
          <path
            id="blob5"
            fill="url(#blob2_2_)"
            d="M278,147.7c2.7-7.1,9.4-15.7,15.4-16.4c5.9-0.4,12.6,8.5,15.4,16.9
    c2.7,8.4-4.2,14.9-15.4,14.2C282.2,161.5,275.3,154.8,278,147.7z"
          />

          <path
            id="blob3"
            fill="url(#blob3_2_)"
            d="M312.7,147.3c-2.1,16.4-15.3,27.2-23.2,25.3c-8.1-1.8-12.6-13-14.8-24.9
    c-1.9-11.8,2.7-22.7,14.8-25.3C301.5,119.6,314.7,130.8,312.7,147.3z"
          />

          <path
            id="blob4"
            fill="url(#blob4_2_)"
            d="M317.8,147.4c-1,8.2-9.8,10.3-13.8,9.3c-4-0.9-6.5-3-7.6-8.9c-1-5.9,2.3-8.5,8.4-9.8
    C310.8,136.6,318.8,139.1,317.8,147.4z"
          />
        </g>
      </svg>
    );
  }
}
