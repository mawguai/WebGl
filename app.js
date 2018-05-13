var initDemo = function() {

    var canvas = document.getElementById('webgl-triangle');
    var gl = canvas.getContext('webgl');

    if (!gl) {
        alert('Your browser does not support WebGl');
    }

    gl.clearColor(R, G, B, A); // Set the values you want
    gl.clear(); // Initialize both the depth && color buffer
}