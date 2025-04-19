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
  window.addEventListener('resize', resizeCanvas); // Constants

  var bases = ['A', 'T', 'G', 'C'];
  var colors = {
    'A': '#66FF66',
    'T': '#FF6666',
    'G': '#6666FF',
    'C': '#FFFF66'
  }; // Softer colors

  var sequenceCount = 20;
  var maxLength = 10;
  var mutationRate = 0.0001; // Slower mutation rate

  var growthRate = 0.0005; // Slower growth rate

  var mouseX = null;
  var mouseY = null; // Sequence class representing an evolving ATGC strand

  var Sequence =
  /*#__PURE__*/
  function () {
    function Sequence() {
      _classCallCheck(this, Sequence);

      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      this.strand = [bases[Math.floor(Math.random() * 4)]];
      this.fitness = Math.random(); // Affects growth and survival
    }

    _createClass(Sequence, [{
      key: "update",
      value: function update() {
        var _this = this;

        // Move sequence
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1; // Mouse-driven selection

        if (mouseX !== null && mouseY !== null) {
          var dx = mouseX - this.x;
          var dy = mouseY - this.y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            this.fitness += 0.02; // Selection pressure increases fitness

            this.vx += dx / distance * 0.05;
            this.vy += dy / distance * 0.05;
          }
        } // Growth


        if (this.strand.length < maxLength && Math.random() < growthRate * this.fitness) {
          this.strand.push(bases[Math.floor(Math.random() * 4)]);
        } // Mutation


        this.strand.forEach(function (base, i) {
          if (Math.random() < mutationRate) {
            _this.strand[i] = bases[Math.floor(Math.random() * 4)];
            _this.fitness = Math.max(0, Math.min(1, _this.fitness + (Math.random() - 0.5) * 0.1));
          }
        });
      }
    }, {
      key: "draw",
      value: function draw() {
        var baseSize = 8; // Smaller size

        ctx.save();
        ctx.translate(this.x, this.y);
        this.strand.forEach(function (base, i) {
          // Draw base letter
          ctx.fillStyle = colors[base];
          ctx.font = 'bold 12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(base, i * baseSize * 1.2, 0); // Draw backbone line

          if (i > 0) {
            ctx.beginPath();
            ctx.moveTo((i - 1) * baseSize * 1.2, 0);
            ctx.lineTo(i * baseSize * 1.2, 0);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        ctx.restore();
      }
    }]);

    return Sequence;
  }(); // Initialize sequences


  var sequences = [];

  for (var i = 0; i < sequenceCount; i++) {
    sequences.push(new Sequence());
  } // Mouse interaction


  header.addEventListener('mousemove', function (e) {
    var rect = header.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  header.addEventListener('mouseleave', function () {
    mouseX = null;
    mouseY = null;
  }); // Animation loop

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Update and draw sequences

    sequences.forEach(function (seq, index) {
      seq.update();
      seq.draw(); // Evolutionary pruning: low fitness sequences may "die"

      if (seq.fitness < 0.1 && Math.random() < 0.01) {
        // Increased pruning rate
        sequences.splice(index, 1);
        sequences.push(new Sequence()); // Replace with a new sequence
      }
    });
    requestAnimationFrame(animate);
  }

  animate();
});