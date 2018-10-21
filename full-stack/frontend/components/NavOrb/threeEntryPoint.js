import SceneManager from './sceneManager';
import ReactDom from 'react-dom';

export default containerElement => {

    const canvas = <canvas></canvas>
    ReactDom.render(canvas,containerElement);

    const sceneManager = new SceneManager(canvas);

    bindEventListeners();
    render();

    function createCanvas(document,wrapper){
        //const canvas = document.createElement('canvas');
        //containerElement.appendChild(canvas);
        const canvas = <canvas></canvas>
        console.log(wrapper);
        ReactDom.render(canvas, wrapper);
        return canvas;
    }

    function bindEventListeners(){
        window.onresize = resizeCanvas;
        resizeCanvas();
    }

    function resizeCanvas(){
//        canvas.style.width = '100%';
//        canvas.style.height = '100%';
//        canvas.width = canvas.offsetWidth;
//        canvas.height = canvas.offsetHeight;


        ReactDom.render(canvas, containerElement);
        sceneManager.onWindowResize();
    }
    function render(time){
        requestAnimationFrame(render);
        sceneManager.update();
    }
}