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
