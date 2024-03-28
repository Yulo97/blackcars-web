"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const Model3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let mesh;
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000);
    scene.add(camera);
    camera.position.z = 8;
    camera.position.x = 8;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const loader = new GLTFLoader().setPath("/bmw/");
    loader.load(
      "scene.gltf",
      function (gltf) {
        mesh = gltf.scene;
        mesh.position.set(0, -0.5, 0);
        scene.add(mesh);
        // camera.lookAt(mesh.position);
        animate(); // Llama a animate aquí, después de que mesh se haya definido
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    const ambientalLight = new THREE.AmbientLight(0x404040, 1); // Luz ambiental blanca suave
    scene.add(ambientalLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Luz puntual blanca suave
    pointLight.position.set(1.2, 1.2, 2.5);

    scene.add(pointLight);

    // // Añade un ayudante para visualizar la posición de la luz puntual
    // const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    // scene.add(pointLightHelper);

    // const cameraHelper = new THREE.CameraHelper(camera);
    // scene.add(cameraHelper);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (mesh) {
        mesh.rotation.y = elapsedTime * 0.5; // Asegúrate de que mesh esté definido
      }

      controls.update();
      renderer.render(scene, camera);
    };

    const resize = () => {
      const updatedWidth = currentRef.clientWidth;
      const updatedHeight = currentRef.clientHeight;
      renderer.setSize(updatedWidth, updatedHeight);
      camera.aspect = updatedWidth / updatedHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", resize);

    return () => {
      currentRef.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "60vh" }}></div>;
};
