import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
})

function initThree() {
  const model = document.querySelector('.model')

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('##e1e2de')
  scene.position.set(0, -30, 0)

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    3000
  )
  camera.position.set(-130, 80, 50)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  model.appendChild(renderer.domElement)

  {
    const loader = new GLTFLoader()
    loader.load(
      'model-narkomfin/scene.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('ошибка' + error)
      }
    )
  }

  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xffeeee)
    light.position.set(-80, 100, 0)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeffee)
    light.position.set(50, 100, 0)
    scene.add(light)
  }

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistanxe = 300
  controls.maxPolarAngle = Math.PI / 2.2

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
