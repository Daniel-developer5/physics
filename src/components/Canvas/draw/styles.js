const styles = {
  colors: {
    DEFAULT: '#000',
  },
  fonts: {
    SMALL_SIZE: 16,
    getSmall() {
      return `${fonts.SMALL_SIZE}px sans-serif`
    },
  },
}

export const { colors, fonts } = styles

export default styles
