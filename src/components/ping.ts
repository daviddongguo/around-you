import express from 'express'

const router = express.Router()

router.get('/api/ping', async (req, res) => {
  const start = Date.now()
  while (Date.now() - start < 3000) {}
  res.status(200).json({
    message: 'success',
    success: true,
    url: `${req.url}`
  })
})
router.get('/api/fast', (req, res) => {
  res.status(200).send('this was fast')
})
export { router as pingRouter }
