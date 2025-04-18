"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// _scripts/dynamic-background.js
document.addEventListener("DOMContentLoaded", function () {
  // 创建 Canvas 元素
  var dynamicBackground = document.getElementById("dynamic-background");
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.id = "dynamic-canvas";
  dynamicBackground.appendChild(canvas); // 调整 Canvas 尺寸

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas(); // 粒子动画逻辑

  var Particle =
  /*#__PURE__*/
  function () {
    function Particle() {
      _classCallCheck(this, Particle);

      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      };
    }

    _createClass(Particle, [{
      key: "update",
      value: function update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
      }
    }, {
      key: "draw",
      value: function draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }]);

    return Particle;
  }(); // 初始化粒子


  var particles = Array.from({
    length: 50
  }, function () {
    return new Particle();
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (particle) {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
});