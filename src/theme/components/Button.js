const Button = {
  baseStyle: (props) => ({
    '&:hover': {
      opacity: 0.8,
      backgroundColor: `${props.bg || props.background} !important`,
    },
  }),
}

export default Button
