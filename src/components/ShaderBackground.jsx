import React, { useEffect, useRef } from 'react';

export default function ShaderBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_light_mode;

      float grid(vec2 uv, float res) {
          vec2 grid = fract(uv * res);
          return 1.0 - smoothstep(0.0, 0.03, min(grid.x, grid.y));
      }

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          
          vec3 darkColor = vec3(0.02);
          vec3 lightColor = vec3(0.98);
          vec3 baseColor = mix(darkColor, lightColor, u_light_mode);
          
          float g = grid(uv, 15.0);
          float gridIntensity = mix(0.025, 0.015, u_light_mode);
          
          vec3 gridColor = mix(vec3(g * gridIntensity), vec3(g * gridIntensity * -1.0), u_light_mode);
          
          float dist = distance(uv, vec2(0.5, 0.5));
          float spotlight = (1.0 - smoothstep(0.0, 0.8, dist)) * 0.04;
          vec3 spotlightColor = mix(vec3(spotlight), vec3(-spotlight * 0.5), u_light_mode);
          
          float n = random(uv + u_time * 0.0001);
          vec3 noiseColor = mix(vec3(n * 0.02), vec3(-n * 0.015), u_light_mode);
          
          gl_FragColor = vec4(baseColor + gridColor + spotlightColor + noiseColor, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uLightMode = gl.getUniformLocation(program, 'u_light_mode');

    let animationFrameId;

    function resizeCanvas() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function render(time) {
      resizeCanvas();
      
      const lightModeUniformValue = theme === 'light' ? 1.0 : 0.0;
      
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uLightMode, lightModeUniformValue);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    }

    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40 dark:opacity-30 transition-opacity duration-500"
    />
  );
}
