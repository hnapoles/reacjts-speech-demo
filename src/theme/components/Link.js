const Link = {
  variants: {
    default: {
      _focus: {
        boxShadow: 'none',
      },
    },
    nounderline: {
      _hover: {
        textDecoration: 'none',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}

export default Link
