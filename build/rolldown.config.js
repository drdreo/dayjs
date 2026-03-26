export default (config) => {
  const { input, fileName } = config
  return {
    input: {
      input,
      external: [
        'esm-dayjs'
      ]
    },
    output: {
      file: fileName,
      format: 'es',
      minify: true
    }
  }
}
