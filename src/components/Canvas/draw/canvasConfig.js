const canvasConfig = {
  width: 0,
  height: 0,
  $: null,
  setConfig(settings) {
    Object.entries(settings).forEach(([key, value]) => {
      canvasConfig[key] = value
    })
  },
}

export default canvasConfig
