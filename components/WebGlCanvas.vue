<template>
  <div class="relative h-[340px] overflow-hidden rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/30 shadow-soft">
    <canvas ref="canvasEl" class="h-full w-full" />

    <div class="pointer-events-none absolute inset-x-0 top-0 p-5">
      <div class="inline-flex items-center gap-2 rounded-full bg-ziptrigo-ink/90 px-3 py-1.5 text-xs font-semibold text-ziptrigo-mist">
        <span class="h-2 w-2 rounded-full bg-ziptrigo-moss" />
        WebGL / Three.js placeholder
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasEl = ref<HTMLCanvasElement | null>(null)

let stop = false
let cleanup: (() => void) | null = null

onMounted(async () => {
  if (!import.meta.client || !canvasEl.value) {
    return
  }

  const THREE = await import('three')

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    alpha: true,
    antialias: true,
  })

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(0, 0.2, 3.2)

  const geometry = new THREE.IcosahedronGeometry(1, 1)
  const material = new THREE.MeshStandardMaterial({
    color: 0x4e6152,
    metalness: 0.1,
    roughness: 0.6,
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1)
  keyLight.position.set(3, 3, 3)
  scene.add(keyLight)

  const fillLight = new THREE.AmbientLight(0xffffff, 0.45)
  scene.add(fillLight)

  const resize = (): void => {
    if (!canvasEl.value) {
      return
    }

    const { width, height } = canvasEl.value.getBoundingClientRect()
    renderer.setSize(Math.max(1, Math.floor(width)), Math.max(1, Math.floor(height)), false)
    camera.aspect = width / Math.max(1, height)
    camera.updateProjectionMatrix()
  }

  const ro = new ResizeObserver(() => resize())
  ro.observe(canvasEl.value)
  resize()

  const render = (): void => {
    if (stop) {
      return
    }

    mesh.rotation.y += 0.008
    mesh.rotation.x += 0.004

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }

  render()

  cleanup = () => {
    ro.disconnect()
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
})

onBeforeUnmount(() => {
  stop = true
  cleanup?.()
})
</script>
