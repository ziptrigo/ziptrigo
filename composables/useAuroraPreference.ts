import { onMounted, watch } from 'vue'

const STORAGE_KEY = 'ziptrigo:aurora-enabled'

export function useAuroraPreference() {
  const auroraEnabled = useState<boolean>('aurora-enabled', () => true)

  onMounted(() => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored === '0') {
      auroraEnabled.value = false
    } else if (stored === '1') {
      auroraEnabled.value = true
    }

    watch(
      auroraEnabled,
      (value) => {
        localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
      },
      {
        flush: 'post',
      },
    )
  })

  const toggleAurora = () => {
    auroraEnabled.value = !auroraEnabled.value
  }

  return {
    auroraEnabled,
    toggleAurora,
  }
}
