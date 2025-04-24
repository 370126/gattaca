"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var canvas = document.getElementById('header-canvas');
  var ctx = canvas.getContext('2d'); // —— 1. 画布自适应 —— 

  function resizeCanvas() {
    canvas.width = header.offsetWidth;
    canvas.height = header.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas); // —— 2. 演化波纹系统 —— 

  var waveCount = 5; // 波纹条数

  var waves = [];

  for (var i = 0; i < waveCount; i++) {
    waves.push({
      amplitude: 10 + Math.random() * 20,
      // 振幅
      frequency: 0.005 + Math.random() * 0.005,
      // 频率
      phase: Math.random() * Math.PI * 2,
      // 初相位
      // **把基础速度提到 0.005–0.01 之间，原来是 0.002–0.005**
      speed: 0.005 + Math.random() * 0.005,
      yOffset: canvas.height * (0.2 + 0.6 * (i / (waveCount - 1))),
      color: "rgba(180,200,255,".concat(0.05 + i * 0.02, ")")
    });
  }

  var mouseX = 0;
  header.addEventListener('mousemove', function (e) {
    var rect = header.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width * 2 - 1; // -1 … +1
  });
  header.addEventListener('mouseleave', function () {
    mouseX = 0;
  });

  function drawWaves() {
    waves.forEach(function (w) {
      // **在相位更新里把 mouseX 的影响也加大到 0.002**
      w.phase += w.speed + mouseX * 0.002;
      ctx.beginPath();
      ctx.strokeStyle = w.color;
      ctx.lineWidth = 1;

      for (var x = 0; x <= canvas.width; x += 10) {
        var y = w.yOffset + Math.sin(x * w.frequency + w.phase) * w.amplitude;
        if (x === 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
      }

      ctx.stroke();
    });
  } // —— 3. DNA 双螺旋系统（保持不变） —— 


  var helix = {
    segments: 100,
    r: 50,
    pitch: 6,
    baseSpeed: 0.002,
    interact: 0.025,
    phase: 0
  };

  function project(x, y, z) {
    var fov = 300,
        s = fov / (fov + z);
    return {
      x: canvas.width / 2 + x * s,
      y: canvas.height / 2 + y * s
    };
  }

  function drawHelix() {
    helix.phase += helix.baseSpeed + mouseX * helix.interact;
    var p1 = [],
        p2 = [];

    for (var _i = 0; _i < helix.segments; _i++) {
      var t = _i / helix.segments * Math.PI * 4 + helix.phase;
      var y = (_i - helix.segments / 2) * helix.pitch;
      p1.push({
        x: helix.r * Math.cos(t),
        y: y,
        z: helix.r * Math.sin(t)
      });
      p2.push({
        x: helix.r * Math.cos(t + Math.PI),
        y: y,
        z: helix.r * Math.sin(t + Math.PI)
      });
    } // 碱基对


    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(200,200,200,0.3)';

    for (var _i2 = 0; _i2 < helix.segments; _i2 += 5) {
      var a = project(p1[_i2].x, p1[_i2].y, p1[_i2].z);
      var b = project(p2[_i2].x, p2[_i2].y, p2[_i2].z);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    } // 主链


    [p1, p2].forEach(function (pts) {
      ctx.beginPath();
      pts.forEach(function (pt, i) {
        var v = project(pt.x, pt.y, pt.z);
        i === 0 ? ctx.moveTo(v.x, v.y) : ctx.lineTo(v.x, v.y);
      });
      ctx.strokeStyle = 'rgba(150,150,255,0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  } // —— 4. 动画循环 —— 


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWaves();
    drawHelix();
    requestAnimationFrame(animate);
  }

  animate();
});