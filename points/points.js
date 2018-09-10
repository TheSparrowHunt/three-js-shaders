var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var uniforms = {
    amplitude: {
        type: 'f', // a float
        value: 0
    },

    screenWidth: {
        type: 'f',
        value: renderer.getSize().width
    },

    screenHeight: {
        type: 'f',
        value: renderer.getSize().height
    }
  };

var shaderMaterial =
  new THREE.ShaderMaterial({
    uniforms:       uniforms,
    vertexShader:   $('#vert').text(),
    fragmentShader: $('#frag').text()
  });

var geometry = new THREE.CubeGeometry( 3, 3, 3 );
var cube = new THREE.Mesh( geometry, shaderMaterial );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();