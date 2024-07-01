function cena() {
    scene = new THREE.Scene();
    scene.rotation.y = 1.5
    scene.fog = new THREE.Fog('#505050', 220, 180);

    camera = new THREE.PerspectiveCamera(30, 1000 / 1000, 1, 5000);
    camera.position.set(100, -10, -300);

    aLight = new THREE.AmbientLight(0x833200, 1.5)
    Plight = new THREE.PointLight(0x833200, 10, 20);
    luz = new THREE.HemisphereLight(0xff3000, 0xd75200, 5)

    dLight = new THREE.DirectionalLight(0xff7854, 2)
    dLight2 = new THREE.DirectionalLight(0x5882bc, 2)
    dLight3 = new THREE.DirectionalLight(0x7b8ca4, 1)

    luz.position.set(0, 40, 100)
    dLight.position.set(-100, -50, 50)
    dLight2.position.set(100, -50, 50)
    dLight3.position.set(100, 50, 50)

    camera.add(Plight);
    scene.add(luz, dLight, aLight, dLight2, dLight3);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(700, 700);
    renderer.setPixelRatio(2);
    document.querySelector('.foto').appendChild(renderer.domElement);

    FBXloader = new THREE.FBXLoader();
    FBXloader.load('model/cadeira.fbx', (fbx) => {
        scene.add(fbx)
        fbx.scale.set(.075, .075, .075)
        fbx.position.y = -50

        window.onscroll = () => {
            rot = (window.scrollY / 500) - 5
            fbx.rotation.y = rot;
        }

        animar();
    })

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; controls.enablePan = false;
    controls.addEventListener('change', function () { renderer() })
}

function animar() {
    renderer.render(scene, camera);
    requestAnimationFrame(animar);
}


cena()
