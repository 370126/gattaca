"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var canvas = document.getElementById('header-canvas');
  var ctx = canvas.getContext('2d'); // Set canvas size to match header

  function resizeCanvas() {
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas); // Ripple effect settings

  var ripples = [];

  var Ripple =
  /*#__PURE__*/
  function () {
    function Ripple(x, y) {
      _classCallCheck(this, Ripple);

      this.x = x;
      this.y = y;
      this.radius = 0;
      this.maxRadius = Math.min(canvas.width, canvas.height) / 2;
      this.speed = 2;
      this.opacity = 1;
    }

    _createClass(Ripple, [{
      key: "update",
      value: function update() {
        this.radius += this.speed;
        this.opacity -= 0.02;
      }
    }, {
      key: "draw",
      value: function draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 100, 150, ".concat(this.opacity, ")");
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }, {
      key: "isFinished",
      value: function isFinished() {
        return this.opacity <= 0 || this.radius >= this.maxRadius;
      }
    }]);

    return Ripple;
  }(); // Check if mouse is inside header


  function isMouseInHeader(e) {
    var rect = header.getBoundingClientRect();
    return e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
  } // Animation loop


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = ripples.length - 1; i >= 0; i--) {
      ripples[i].update();
      ripples[i].draw();

      if (ripples[i].isFinished()) {
        ripples.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate(); // Add ripple on mouse move

  document.addEventListener('mousemove', function (e) {
    if (isMouseInHeader(e)) {
      var mouseX = e.clientX - header.getBoundingClientRect().left;
      var mouseY = e.clientY - header.getBoundingClientRect().top;
      ripples.push(new Ripple(mouseX, mouseY));
    }
  });
});