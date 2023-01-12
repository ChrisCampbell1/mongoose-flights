import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

/* GET users listing. */
router.get('/new', mealsCtrl.new)


export {
  router
}
