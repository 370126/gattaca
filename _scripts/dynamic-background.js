// _scripts/dynamic-background.js

document.addEventListener("DOMContentLoaded", () => {
    // 创建 Canvas 元素
    const dynamicBackground = document.getElementById("dynamic-background");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.id = "dynamic-canvas";
    dynamicBackground.appendChild(canvas);
  
    // 调整 Canvas 尺寸
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  
    // 粒子动画逻辑
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
      }
      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    // 初始化粒子
    const particles = Array.from({ length: 50 }, () => new Particle());
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  });