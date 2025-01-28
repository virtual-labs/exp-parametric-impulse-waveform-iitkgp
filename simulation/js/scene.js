/* global flag */
/**
 * 
 *  Document     : scene.js
 *  Created on   : Marn9, 2017, 4:35:25 PM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var CUBEScene = {
    scene: null,
    cube1: null,
    cube11: null,
    cube12: null,
    cube13: null,
    cylinder16: null,
    cylinder17: null,
    cylinder19: null,
    cylinder20: null,
    cylinder21: null,
    cylinder22: null,
     cylinder12: null,
    cylinder13: null,
    sphere1:null,
     cylinder23: null,
    cylinder24: null,
    cylinder26: null,
    cylinder27: null,
     cylinder28: null,
    cylinder29: null,
    cylinder5: null,
    cylinder3: null,
    cylinder41: null,
    cylinder42: null,
     cylinder43: null,
    cylinder45: null,
    sphere2:null,
    cylinder166: null,
    star: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,

    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.scene.position.set(-100,60,0);

        this.container = document.getElementById("canvas3d-view");

        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;


//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(0, 20, 680);
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);


        var dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 150, 400);
        this.scene.add(dirLight);

        var dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
        dirLight1.position.set(0, 150, -400);
        this.scene.add(dirLight1);

//var dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
//dirLight2.position.set(-400, 150, 0);
//this.scene.add(dirLight2);
//
//var dirLight3 = new THREE.DirectionalLight(0xffffff, 1);
//dirLight3.position.set(400, 150, 0);
//this.scene.add(dirLight3);


        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);

        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);

// Stats preparing
//        this.stats = new Stats();
//        this.stats.domElement.style.position = 'absolute';
//        this.stats.domElement.style.top = '45px';
//        this.container.appendChild(this.stats.domElement);

// scene
//        this.scene = new THREE.Scene();

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
//        axes = buildAxes(200);
//        this.scene.add(axes);
// cube

        var group1 = new THREE.Object3D();//create an empty container
        //create an empty container
        this.cube1 = new THREE.Mesh(new THREE.BoxGeometry(30, 60, 160), new THREE.MeshPhongMaterial({wireframe: false, color: 0xee0022}));
        this.cube1.overdraw = true;
        this.cube1.position.set(257.5, 0, -5.0);
        this.cube1.rotation.x = Math.PI * 0;
        this.cube1.rotation.y = Math.PI * -0.45;



        this.cube12 = new THREE.Mesh(new THREE.BoxGeometry(50, 45, 40), new THREE.MeshPhongMaterial({wireframe: false, color: 0xC0C0C0}));
        this.cube12.overdraw = true;
        this.cube12.position.set(340.0, -20, -15.0);
        this.cube12.rotation.x = Math.PI * 0;
        this.cube12.rotation.y = Math.PI * -0.45;

        this.cube13 = new THREE.Mesh(new THREE.BoxGeometry(50, 45, 40), new THREE.MeshPhongMaterial({wireframe: false, color: 0xC0C0C0}));
        this.cube13.overdraw = true;
        this.cube13.position.set(200.0, -20, 6);
        this.cube13.rotation.x = Math.PI * 0;
        this.cube13.rotation.y = Math.PI * -0.45;

        this.cube11 = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 175), new THREE.MeshPhongMaterial({wireframe: false, color: 0xC0C0C0}));
        this.cube11.overdraw = true;
        this.cube11.position.set(275.0, 0, -5.0);
        this.cube11.rotation.x = Math.PI * 0;
        this.cube11.rotation.y = Math.PI * -0.45;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 200, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x0000ff});
        var cylinder1 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder1.overdraw = true;
        cylinder1.position.set(345.0, -100, -15.0);

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x0000ff});
        var cylinder2 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder2.overdraw = true;
        cylinder2.position.set(200.0, -125, 0);


        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 152, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x0000ff});
        var cylinder40 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder40.overdraw = true;
        cylinder40.position.set(345.0, 25, -15);

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 200, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder41 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder41.overdraw = true;
        this.cylinder41.position.set(95, -60, 10);
        this.cylinder41.rotation.z = Math.PI * -0.25;


        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 120, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xffff00});
        this.cylinder43 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder43.overdraw = true;
        this.cylinder43.position.set(90, -63, 10);
        this.cylinder43.rotation.z = Math.PI * -0.25;


        var cylindergeometry = new THREE.CylinderGeometry(20, 20, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x00ffff});
        var cylinder44 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder44.overdraw = true;
        cylinder44.position.set(250.0, 100, 2);
        cylinder44.rotation.x = Math.PI * 0.5;
        cylinder44.rotation.z = Math.PI * 0.45

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 85, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder42 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder42.overdraw = true;
        this.cylinder42.position.set(23, 58.5, 32);

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 325, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder45 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder45.overdraw = true;
        this.cylinder45.position.set(182.5, 99, 7.5);
        this.cylinder45.rotation.x = Math.PI * 0.5;
        this.cylinder45.rotation.z = Math.PI * 0.452


        var SphereGeometry = new THREE.SphereGeometry(3, 160, 160);
        var Spherematerial = new THREE.MeshNormalMaterial({wireframe: false, color: 0xb87333});
        var sphere45 = new THREE.Mesh(SphereGeometry, Spherematerial);
        sphere45.overdraw = true;
        sphere45.position.set(23, 100, 32);


        var cylindergeometry = new THREE.CylinderGeometry(10, 10, 25, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({wireframe: false, color: 0x0000ff});
         this.cylinder3 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder3.overdraw = true;
        this.cylinder3.position.set(165.0, 15, 10);
        this.cylinder3.rotation.x = Math.PI * 0.5;
        this.cylinder3.rotation.z = Math.PI * 0.45;

        var cylindergeometry = new THREE.CylinderGeometry(6, 6, 50, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder4 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder4.overdraw = true;
        cylinder4.position.set(130, 15, 15);
        cylinder4.rotation.x = Math.PI * 0.5;
        cylinder4.rotation.z = Math.PI * 0.45;

        var cylindergeometry = new THREE.CylinderGeometry(2, 2, 110, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder5 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder5.overdraw = true;
        this.cylinder5.position.set(75, 15, 22);
        this.cylinder5.rotation.x = Math.PI * 0.5;
        this.cylinder5.rotation.z = Math.PI * 0.45;


        var group10 = new THREE.Object3D();

        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder55 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder55.overdraw = true;
        cylinder55.position.set(0, 0, 0);


        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder56 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder56.overdraw = true;
        cylinder56.position.set(7, 0, 0);


        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder57 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder57.overdraw = true;
        cylinder57.position.set(14, 0, 0);


        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder59 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder59.overdraw = true;
        cylinder59.position.set(21, 0, 0);


        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder58 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder58.overdraw = true;
        cylinder58.position.set(28, 0, 0);


        var SphereGeometry = new THREE.SphereGeometry(7, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        var cylinder60 = new THREE.Mesh(SphereGeometry, Spherematerial);
        cylinder60.overdraw = true;
        cylinder60.position.set(35, 0, 0);

        group10.position.set(112.5, 15, 17.5);
        group10.rotation.x = Math.PI * 0.5;
        group10.rotation.z = Math.PI * -0.05;

        group10.add(cylinder55);
        group10.add(cylinder56);
        group10.add(cylinder57);
        group10.add(cylinder58);
        group10.add(cylinder59);
        group10.add(cylinder60);

        group1.add(this.cube1);
        group1.add(this.cube11);
        group1.add(this.cube12);
        group1.add(this.cube13);
        group1.add(cylinder1);
        group1.add(cylinder2);
        group1.add(this.cylinder3);
        group1.add(cylinder4);
        group1.add(this.cylinder5);
        group1.add(cylinder40);
        group1.add(this.cylinder42);
        group1.add(this.cylinder41);
        group1.add(this.cylinder43);
        group1.add(cylinder44);
        group1.add(this.cylinder45);
        group1.add(sphere45);

        group1.add(group10);
        group1.position.set(0, 50, 0);

        var group2 = new THREE.Object3D();
        group2 = group1.clone();
        group2.overdraw = true;
        group2.position.set(-20, 50, -25);
        group2.rotation.y = Math.PI * 0.1;

        var group3 = new THREE.Object3D();
        group3 = group1.clone();
        group3.overdraw = true;
        group3.position.set(-35, 50, -20);
        group3.rotation.y = Math.PI * 0.25;

        var group4 = new THREE.Object3D();
        group4 = group1.clone();
        group4.overdraw = true;
        group4.position.set(-40, 50, 5);
        group4.rotation.y = Math.PI * 0.45;

        var group5 = new THREE.Object3D();
        group5 = group1.clone();
        group5.overdraw = true;
        group5.position.set(-40, 50, 25);
        group5.rotation.y = Math.PI * 0.60;

        var group6 = new THREE.Object3D();
        group6 = group1.clone();
        group6.overdraw = true;
        group6.position.set(-22, 50, 35);
        group6.rotation.y = Math.PI * 0.75;



        var group7 = new THREE.Object3D();
        group7 = group1.clone();
        group7.overdraw = true;
        group7.position.set(-5, 50, 55);
        group7.rotation.y = Math.PI * 0.9;


        var cube9 = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 700), new THREE.MeshBasicMaterial({wireframe: false, color: 0xb0c4de}));
        cube9.overdraw = true;
        cube9.position.set(0.0, -150, 0);
        cube9.rotation.y = Math.PI * 0.5;

// var radius = 300;
//        var tubeRadius = 5;
//        var radialSegments = 8 * 10;
//        var tubularSegments = 6 * 15;
//        var arc = Math.PI * 1.0;
        var torusgeometry = new THREE.TorusGeometry(340, 2, 8 * 10, 6 * 15, Math.PI * 0.95);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb0c4de, shading: THREE.FlatShading});
        var torus1 = new THREE.Mesh(torusgeometry, torusmaterial);
        torus1.position.set(0, 50, 0);
        torus1.rotation.x = Math.PI * -0.5;


        var torusgeometry = new THREE.TorusGeometry(340, 10, 8 * 1, 6 * 15, Math.PI * 1.);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb0c4de, shading: THREE.FlatShading});
        var torus2 = new THREE.Mesh(torusgeometry, torusmaterial);
        torus2.position.set(0, -150, 0);
        torus2.rotation.x = Math.PI * -0.5;

        var torusgeometry = new THREE.TorusGeometry(190, 8, 8 * 1, 6 * 15, Math.PI * 1);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb0c4de, shading: THREE.FlatShading});
        var torus3 = new THREE.Mesh(torusgeometry, torusmaterial);
        torus3.position.set(0, -150, 0);
        torus3.rotation.x = Math.PI * -0.5;

        var group22 = new THREE.Object3D();
        var cylindergeometry = new THREE.CylinderGeometry(30, 30, 60, 100, 10, true, Math.PI * 0.2, Math.PI * 1.5);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        var cylinder6 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder6.overdraw = true;
        cylinder6.position.set(5, -17.5, 5);

        var cylindergeometry = new THREE.CylinderGeometry(40, 25, 80, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0xb0c4de});
        var cylinder61 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder61.overdraw = true;
        cylinder61.position.set(5, -87.5, 5);

        var cylindergeometry = new THREE.CylinderGeometry(42.5, 42.5, 5, 100, 10, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0xb0c4de});
        var cylinder62 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder62.overdraw = true;
        cylinder62.position.set(5, -130, 5);

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 75, 100, 10, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: false, opacity: 1});
        var cylinder63 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder63.overdraw = true;
        cylinder63.position.set(-25, -170, 0);

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 75, 100, 10, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: false, opacity: 1});
        var cylinder64 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder64.overdraw = true;
        cylinder64.position.set(25, -170, 0);

        var cube65 = new THREE.Mesh(new THREE.BoxGeometry(75, 20, 20), new THREE.MeshBasicMaterial({wireframe: false, color: 0xAAAAAA}));
        cube65.overdraw = true;
        cube65.position.set(0, -200, 0);


        var cylindergeometry = new THREE.CylinderGeometry(40, 40, 5, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x00ff00});
        var cylinder7 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder7.overdraw = true;
        cylinder7.position.set(5, 15, 5);

        var cylindergeometry = new THREE.CylinderGeometry(40, 40, 5, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x00ff00});
        var cylinder8 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder8.overdraw = true;
        cylinder8.position.set(5, -50, 5);



        var SphereGeometry = new THREE.SphereGeometry(15, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
       this.sphere1 = new THREE.Mesh(SphereGeometry, Spherematerial);
        this.sphere1.overdraw = true;
        this.sphere1.position.set(7.5, 3.0, 0);

        var SphereGeometry = new THREE.SphereGeometry(15, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        this.sphere2 = new THREE.Mesh(SphereGeometry, Spherematerial);
        this.sphere2.overdraw = true;
        this.sphere2.position.set(7.5, -50, 0);
        group22.position.set(-5, 50, 10);

        group22.add(cylinder6);
        group22.add(cylinder61);
        group22.add(cylinder62);
        group22.add(cylinder63);
        group22.add(cylinder64);
        group22.add(cube65);
        group22.add(cylinder7);
        group22.add(cylinder8);
        group22.add(this.sphere1);
        group22.add(this.sphere2);


        var supply = new THREE.Object3D();
        var cube5 = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 150), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube5.overdraw = true;
        cube5.position.set(20, -2.5, 0);
        cube5.rotation.x = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(40, 40, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder9 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder9.overdraw = true;
        cylinder9.position.set(75, 50, 0);

        var cylindergeometry = new THREE.CylinderGeometry(42.5, 42.5, 5, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        var cylinder10 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder10.overdraw = true;
        cylinder10.position.set(75, 100, 0);

        var cube6 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 55), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube6.overdraw = true;
        cube6.position.set(75, 100, 0);
        cube6.rotation.x = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder12 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder12.overdraw = true;
        this.cylinder12.position.set(0, 120, -20);
        this.cylinder12.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 50, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffff00});
        var cylinder14 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder14.overdraw = true;
        cylinder14.position.set(-50, 120, -20);
        cylinder14.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder13 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder13.overdraw = true;
        this.cylinder13.position.set(0, 120, 20);
        this.cylinder13.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(10, 10, 10, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder18 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder18.overdraw = true;
        cylinder18.position.set(-80, 110, 0);
        cylinder18.rotation.z = Math.PI * 0.5;


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 180, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder19 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder19.overdraw = true;
        this.cylinder19.position.set(-100, 110, 95);
        this.cylinder19.rotation.x = Math.PI * 0.5;
        this.cylinder19.rotation.z = Math.PI * 0.075;


        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 70, 50, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder20 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder20.overdraw = true;
        this.cylinder20.position.set(-125, 75, 165);
//        cylinder18.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 70, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder21 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder21.overdraw = true;
        this.cylinder21.position.set(-125, 75, 180);

        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 50, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder22 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder22.overdraw = true;
        this.cylinder22.position.set(-125, 20, 172);
//        cylinder18.rotation.z = Math.PI * 0.5;

        var cube71 = new THREE.Mesh(new THREE.BoxGeometry(15, 5, 30), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube71.overdraw = true;
        cube71.position.set(-125, 110, 172);
//        cube71.rotation.x = Math.PI * 0.5;

        var cube72 = new THREE.Mesh(new THREE.BoxGeometry(40, 5, 40), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube72.overdraw = true;
        cube72.position.set(-125, -5, 175);


        var cube7 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 100, 130), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube7.overdraw = true;
        cube7.position.set(-75, 60, 0);
        cube7.rotation.x = Math.PI * 0.5;

        var cube8 = new THREE.Mesh(new THREE.BoxGeometry(75, 25, 100), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube8.overdraw = true;
        cube8.position.set(-15, 20, 0);


        supply.add(cube5);
        supply.add(cylinder9);
        supply.add(cylinder10);
        supply.add(cube6);
        supply.add(this.cylinder12);
        supply.add(this.cylinder13);
        supply.add(cylinder14);
        supply.add(cylinder18);
        supply.add(this.cylinder19);
        supply.add(this.cylinder20);
        supply.add(this.cylinder21);
        supply.add(this.cylinder22);
        supply.add(cube7);
        supply.add(cube71);
        supply.add(cube72);
        supply.add(cube8);
        supply.position.set(0, -150, 350);
        supply.rotation.y = Math.PI * 1;



        var groundset = new THREE.Object3D();
        var cube90 = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 7.5), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube90.overdraw = true;
        cube90.position.set(0, 0, 20);
        cube90.rotation.x = Math.PI * 0;



        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder15 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder15.overdraw = true;
        cylinder15.position.set(0, 25, 0);

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 75, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder16 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder16.overdraw = true;
        this.cylinder16.position.set(330, -105, 350);


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 75, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder166 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder166.overdraw = true;
        this.cylinder166.position.set(230, -105, 350);




        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 50, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder17 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder17.overdraw = true;
        this.cylinder17.position.set(0, 50, 5);
        this.cylinder17.rotation.x = Math.PI * 0.5;

//         window.setTimeout(function(){
//            cylinder16.rotation.x = Math.PI * 0.5;
//            cylinder16.rotation.z = Math.PI * 0.5;
//            cylinder16.material.color.setHex(0xffffff);
//        },10000);

        var SphereGeometry = new THREE.SphereGeometry(5, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        var sphere3 = new THREE.Mesh(SphereGeometry, Spherematerial);
        sphere3.overdraw = true;
        sphere3.position.set(0, 50, 30);

        var SphereGeometry = new THREE.SphereGeometry(5, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        var sphere4 = new THREE.Mesh(SphereGeometry, Spherematerial);
        sphere4.overdraw = true;
        sphere4.position.set(0, 50, -20);

        //this.scene.add(cylinder16);
        groundset.add(cube90);
        groundset.add(cylinder15);

        groundset.add(this.cylinder17);
        groundset.add(sphere3);
        groundset.add(sphere4);
        groundset.position.set(310, -125, 350);
        groundset.rotation.y = Math.PI * 0.5;


        var groundset1 = new THREE.Object3D();
        groundset1 = groundset.clone();
        groundset1.overdraw = true;
        groundset1.position.set(210, -125, 350);
        groundset1.rotation.y = Math.PI * 0.5;

        var cube91 = new THREE.Mesh(new THREE.BoxGeometry(75, 10, 140), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube91.overdraw = true;
        cube91.position.set(275, -152.5, 350);
        cube91.rotation.y = Math.PI * 0.5;

        var cube92 = new THREE.Mesh(new THREE.BoxGeometry(60, 25, 75), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube92.overdraw = true;
        cube92.position.set(275, -125, 350);


        var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
        var mat = new THREE.MeshPhongMaterial({color: 0x222222, side: THREE.DoubleSide});
        var plane = new THREE.Mesh(geo, mat);
        plane.position.set(0, -160, 0);
        plane.rotateX(-Math.PI / 2);

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 175, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder23 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder23.overdraw = true;
        this.cylinder23.position.set(160, -60, 270);
        this.cylinder23.rotation.x = Math.PI * -0.43;
        this.cylinder23.rotation.z = Math.PI * 0.12;


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 375, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
       this.cylinder24 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder24.overdraw = true;
        this.cylinder24.position.set(320, -11, 177);
        this.cylinder24.rotation.x = Math.PI * -0.392;
        this.cylinder24.rotation.z = Math.PI * -0.05;

        var grp = new THREE.Object3D();
        grp = group10.clone();
        grp.position.set(310, 40, 20);
        grp.rotation.z = Math.PI * 0.5;
        grp.rotation.x = Math.PI * 0.5;
        var grp1 = new THREE.Object3D();
        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 200, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x00ffff});
        var cylinder25 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder25.overdraw = true;
        cylinder25.position.set(310, -59, 53);



        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder27 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder27.overdraw = true;
        this.cylinder27.position.set(310, 100, 53);

        grp1.add(grp);
        grp1.add(cylinder25);
        grp1.add(this.cylinder27);
        grp1.position.set(-100, 0, 0);


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 160, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder26 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder26.overdraw = true;
        this.cylinder26.position.set(170, 0, 110);
        this.cylinder26.rotation.x = Math.PI * -0.3;
        this.cylinder26.rotation.z = Math.PI * -0.17;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 110, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder28 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder28.overdraw = true;
        this.cylinder28.position.set(0, 120, 0);


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 220, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder29 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder29.overdraw = true;
        this.cylinder29.position.set(105, 175, 25);
        this.cylinder29.rotation.z = Math.PI * 0.5;
        this.cylinder29.rotation.y = Math.PI * -0.08;


        //star//

        var starPoints = [];

        starPoints.push(new THREE.Vector2(0, 12.5));
        starPoints.push(new THREE.Vector2(2.5, 2.5));
        starPoints.push(new THREE.Vector2(10, 2.5));
        starPoints.push(new THREE.Vector2(5, -2.5));
        starPoints.push(new THREE.Vector2(7.5, -12.5));
        starPoints.push(new THREE.Vector2(0, -5));
        starPoints.push(new THREE.Vector2(-7.5, -12.5));
        starPoints.push(new THREE.Vector2(-5, -2.5));
        starPoints.push(new THREE.Vector2(-10, 2.5));
        starPoints.push(new THREE.Vector2(-2.5, 2.5));

        var starShape = new THREE.Shape(starPoints);

        var extrusionSettings = {
            size: 30, height: 1, curveSegments: 3,
            bevelThickness: 1, bevelSize: 0.5, bevelEnabled: false,
            material: 0, extrudeMaterial: 1
        };

        var starGeometry = new THREE.ExtrudeGeometry(starShape, extrusionSettings);

        var materialFront = new THREE.MeshBasicMaterial({color: 0xffffff});
        var materialSide = new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: 0});
        var materialArray = [materialFront, materialSide];
        var starMaterial = new THREE.MeshFaceMaterial(materialArray);

        this.star = new THREE.Mesh(starGeometry, starMaterial);

        this.star.position.set(2.5, 50, -85);

//         window.setTimeout(function(){
//            star.position.set(2.5,32.5,-85);
//        },10000);


        this.scene.add(this.star);





        this.scene.add(plane);
        this.scene.add(torus1);
        this.scene.add(torus2);
        this.scene.add(torus3);
        this.scene.add(cube9);
        this.scene.add(group1);
        this.scene.add(group2);
        this.scene.add(group3);
        this.scene.add(group4);
        this.scene.add(group5);
        this.scene.add(group6);
        this.scene.add(group7);
        this.scene.add(group22);
        this.scene.add(supply);
        this.scene.add(groundset);
        this.scene.add(groundset1);
        this.scene.add(cube91);
        this.scene.add(cube92);
        this.scene.add(this.cylinder23);
        this.scene.add(this.cylinder24);
        this.scene.add(this.cylinder16);
        this.scene.add(this.cylinder166);
        this.scene.add(this.cylinder26);

        this.scene.add(this.cylinder28);
        this.scene.add(this.cylinder29);
        this.scene.add(grp1);

        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);
//        this.container.addEventListener('mouseout', onContainerMouseDown, false);
//        this.container.addEventListener('mouseout', onContainerMouseUp, false);
//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    CUBEScene.controls.enabled = true;
}
function onContainerMouseOut() {
    CUBEScene.controls.enabled = false;
}
//function onContainerMouseDown() {
//    CUBEScene.controls.enabled = true;
//}
//function onContainerMouseUp() {
//    CUBEScene.controls.enabled =false;
//}
// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    CUBEScene.controls.update();
//    CUBEScene.stats.update();
}
// Render the scene
function render() {
    if (CUBEScene.renderer) {
        CUBEScene.renderer.render(CUBEScene.scene, CUBEScene.camera);
    }
}