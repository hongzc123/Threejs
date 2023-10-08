import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(50, 50, 50)

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00, //设置材质颜色
    transparent: true, //开启透明
    opacity: 0.5 //设置透明度
})

const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(0, 0, 0)

scene.add(mesh)

console.log('三维场景', scene)

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

/**
 * 透视投影相机
 */
// 定义相机输出画布的尺寸(单位:像素px)
const width = 800; //宽度
const height = 500; //高度

// 实例化一个透视投影相机对象
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);

//相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0); //坐标原点

/**
 * 渲染器
 */
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()

// 定义threejs输出画布的尺寸(单位:像素px)
//设置three.js渲染区域的尺寸(像素px)
renderer.setSize(width, height)

//执行渲染操作
renderer.render(scene, camera)

document.getElementById('webgl').appendChild(renderer.domElement)