import React, { Component } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      radius: 1,
      amount: 0,
      particles: [],
      colors: ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"]
    };
    this.accX = (this.dest.x - this.x) / 1000;
    this.accY = (this.dest.y - this.y) / 1000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;
  }

  componentDidMount() {
    const canvas = document.querySelector("#scene");
    const ctx = canvas.getContext("2d");

    const copy = document.querySelector("#copy");

    let ww = (canvas.width = window.innerWidth);
    let wh = (canvas.height = window.innerHeight);
    console.log(canvas, ctx, copy);
  }

  _onMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  // _onTouchMove(e) {
  //   if (e.touches.length > 0) {
  //     mouse.x = touches[0].clientX;
  //     mouse.y = touches[0].clientY;
  //   }
  // }

  // _onTouchEnd(e) {
  //   mouse.x = -9999;
  //   mouse.y = -9999;
  // }

  onMouseClick = () => {
    let radius = this.state.radius;
    this.setState({ radius: this.state.radius + 1 });

    if (radius === 5) {
      radius = 0;
    }
  };

  render(props) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    const a = this.x - mouse.x;
    const b = this.y - mouse.y;

    const distance = Math.sqrt(a * a + b * b);
    if (distance < radius * 70) {
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
return (
        <div>
          <canvas id="scene" onMouseMove={this._onMouseMove.bind(this)} />
          <input id="copy" type="text" alue="Hello Codepen ♥" />
          <p>Click anywhere to change the radius of your mouse</p>
        </div>
      );
    }
    
  }
// render(a) {
//   requestAnimationFrame(render);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < amount; i++) {
//     particles[i].render();
//   }
// }

class Particle {
  constructor(x, y) {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.dest = {
      x,
      y
    };
    this.r = Math.random() * 5 + 2;
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.94;

    this.color = colors[Math.floor(Math.random() * 6)];
  }

  // requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < amount; i++) {
      particles[i].render();
      
  }

// function initScene() {
//   ww = canvas.width = window.innerWidth;
//   wh = canvas.height = window.innerHeight;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.font = `bold ${ww / 10}px sans-serif`;
//   ctx.textAlign = "center";
//   ctx.fillText(copy.value, ww / 2, wh / 2);

//   const data = ctx.getImageData(0, 0, ww, wh).data;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.globalCompositeOperation = "screen";

//   particles = [];
//   for (let i = 0; i < ww; i += Math.round(ww / 150)) {
//     for (let j = 0; j < wh; j += Math.round(ww / 150)) {
//       if (data[(i + j * ww) * 4 + 3] > 150) {
//         particles.push(new Particle(i, j));
//       }
//     }
//   }
//   amount = particles.length;
// }

// copy.addEventListener("keyup", initScene);
// window.addEventListener("resize", initScene);
// window.addEventListener("mousemove", onMouseMove);
// window.addEventListener("touchmove", onTouchMove);
// window.addEventListener("click", onMouseClick);
// window.addEventListener("touchend", onTouchEnd);
// initScene();
// requestAnimationFrame(render);
