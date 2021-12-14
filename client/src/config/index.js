const config = {
  server:
    process.NODE_ENV === 'production'
      ? 'http://davidwu.online'
      : 'http://localhost:3003'
}

export default config
