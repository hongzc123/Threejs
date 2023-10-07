import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(50, 50, 50)

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(0, 10, 0)

scene.add(mesh)

console.log('三维场景', scene)