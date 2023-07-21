import * as THREE from 'three'

//Scene setup
const scene = new THREE.Scene();

//Camera setup -- three different types in threejs. this one is perspective camera.

//field of view in degrees / aspect ratio -- typically width divided by height, otherwise will be squished / near and far, if closer than near, wont render, futher than far, wont render. 
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight, 0.1, 1000)

//creates renderer
const renderer = new THREE.WebGLRenderer();

//sets renderer size, for lower res set third boolean attribute to false
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild( renderer.domElement )

//creates a cube / contains faces and vertices
const geometry = new THREE.BoxGeometry(1, 1, 1)

//creates the material to color the mesh - hex format
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

//creates the mesh
const cube = new THREE.Mesh(geometry,material)

//adds the cube to the scene
scene.add(cube)

//moves the camera away from the cube
camera.position.z = 5

// zoom effect with mwheel
let cameraPosY = 0
document.addEventListener('wheel', (e)=>{
    cameraPosY = cameraPosY + e.deltaY / 300
    camera.position.z = cameraPosY
})


function animate(){
    requestAnimationFrame( animate )
    renderer.render(scene, camera)

    //rotate x and y of cube
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

}

animate()

