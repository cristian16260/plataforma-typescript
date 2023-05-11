import { register, listuser, deleteuser, updateuser } from '../controllers/usercontroller'
import { Router } from 'express'

const router  = Router()

router.post('/', register),
router.get('/', listuser),
router.delete('/', deleteuser),
router.put('/', updateuser)

export default router