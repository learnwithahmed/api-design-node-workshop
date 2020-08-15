import { Router } from 'express'

const mockController = (req, res) => {
	res.send({ message: 'OK' })
}
const router = Router()
// v1/api/item
router.route('/').get(mockController).post(mockController)
// /v1/api/item/:id
router
	.route('/:id')
	.get(mockController)
	.put(mockController)
	.delete(mockController)
export default router
