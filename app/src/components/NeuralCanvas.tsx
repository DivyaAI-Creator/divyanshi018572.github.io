import { useEffect, useRef } from "react";
import * as THREE from "three";

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Node count based on screen size
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 40 : 70;
    const connectionDistance = 18;

    // Create nodes
    const nodes: {
      position: THREE.Vector3;
      velocity: THREE.Vector3;
      originalPos: THREE.Vector3;
      color: THREE.Color;
    }[] = [];

    const colors = [
      new THREE.Color(0x6366f1),
      new THREE.Color(0x818cf8),
      new THREE.Color(0x22d3ee),
      new THREE.Color(0x67e8f9),
    ];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 30;
      const pos = new THREE.Vector3(x, y, z);
      nodes.push({
        position: pos.clone(),
        originalPos: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Node geometry
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);

    nodes.forEach((node, i) => {
      nodePositions[i * 3] = node.position.x;
      nodePositions[i * 3 + 1] = node.position.y;
      nodePositions[i * 3 + 2] = node.position.z;
      nodeColors[i * 3] = node.color.r;
      nodeColors[i * 3 + 1] = node.color.g;
      nodeColors[i * 3 + 2] = node.color.b;
      nodeSizes[i] = Math.random() * 2 + 1.5;
    });

    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
    nodeGeometry.setAttribute("size", new THREE.BufferAttribute(nodeSizes, 1));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(points);

    // Lines for connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    const lines: THREE.Line[] = [];

    function updateConnections() {
      // Remove old lines
      lines.forEach((line) => scene.remove(line));
      lines.length = 0;

      const linePositions: number[] = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < connectionDistance) {
            linePositions.push(
              nodes[i].position.x,
              nodes[i].position.y,
              nodes[i].position.z,
              nodes[j].position.x,
              nodes[j].position.y,
              nodes[j].position.z
            );
          }
        }
      }

      if (linePositions.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        const line = new THREE.LineSegments(lineGeo, lineMaterial);
        scene.add(line);
        lines.push(line);
      }
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    function animate() {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const positions = nodeGeometry.attributes.position.array as Float32Array;

      // Mouse world position
      const mouseWorld = new THREE.Vector3(
        mouseRef.current.x * 40,
        mouseRef.current.y * 30,
        0
      );

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Ambient drift
        node.position.x =
          node.originalPos.x + Math.sin(elapsed * 0.3 + i * 0.5) * 3;
        node.position.y =
          node.originalPos.y + Math.cos(elapsed * 0.2 + i * 0.3) * 2;

        // Mouse attraction (subtle)
        const distToMouse = node.position.distanceTo(mouseWorld);
        if (distToMouse < 20) {
          const pull = (20 - distToMouse) / 20;
          node.position.lerp(mouseWorld, pull * 0.01);
        }

        positions[i * 3] = node.position.x;
        positions[i * 3 + 1] = node.position.y;
        positions[i * 3 + 2] = node.position.z;
      }

      nodeGeometry.attributes.position.needsUpdate = true;

      // Update connections every few frames for performance
      if (Math.floor(elapsed * 60) % 3 === 0) {
        updateConnections();
      }

      // Gentle camera drift
      camera.position.x = Math.sin(elapsed * 0.05) * 2;
      camera.position.y = Math.cos(elapsed * 0.03) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      lines.forEach((line) => scene.remove(line));
      scene.remove(points);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
