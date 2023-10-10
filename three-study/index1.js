// 引入three.js
import * as THREE from 'three';
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

/**
 * 创建网格模型
 */
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);

//材质对象Material
const material = new THREE.MeshBasicMaterial({
    // color: 0x0000ff, //设置材质颜色
    color: 0x00ffff, //设置材质颜色
    // transparent: true, //开启透明
    // opacity: 0.5 //设置透明度
})

//网格模型对象Mesh
const mesh = new THREE.Mesh(geometry, material);

//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0,10,0);

//网格模型添加到场景中
scene.add(mesh);

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

/**
 * 光源设置
 */
// 点光源
// const pointLight = new THREE.PointLight(0xffffff, 1.0)
// const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
const pointLight = new THREE.PointLight(0x0000ff, 1, 0, 0);
//点光源位置
// pointLight.position.set(400, 0, 0)
pointLight.position.set(400, 200, 300)
scene.add(pointLight)

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
// camera.position.set(200, 200, 200);
camera.position.set(292, 223, 185);

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