import * as THREE from 'three';

export default canvas => {
    const scene = buildScene();
    const renderer = buildRenderer({width: '100%',height:'100%'});
    const camera  = buildCamera({width: '100%',height:'100%'});
    const sceneSubjects = createSceneSubjects(scene)

    function buildScene(){
        //Build the scence
        const scene = new THREE.Scene();
        return scene;
    }
    function buildRenderer({width,height}){
        //Build the renderer to a width/height spec
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width,height)
        document.body.appendChild(renderer.domElement);
        return renderer;
    }
    function buildCamera({width,height}){
        //Build camera to width/height spec
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1,1000);
        camera.position.z = 5;
        return camera;
    }
    function createSceneSubjects(scene){
        //Create objects in the scene
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({color:0x00ff00});
        const sphere = new THREE.Mesh(geometry,material);
        scene.add(sphere);
    }
    function update(){
        //Update the scene
    }
    function onWindowResize(){
        //Update the scene when the screen changes
    }

    return {
        update,
        onWindowResize
    }

}