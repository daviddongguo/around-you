const config = {
  server:
    process.env.NODE_ENV === 'production'
      ? 'http://davidwu.online'
      : 'http://localhost:3003'
}

export default config
