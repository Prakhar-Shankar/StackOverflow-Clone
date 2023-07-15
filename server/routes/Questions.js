import express from 'express'

import {AskQuestion} from '../controllers/Questions'

const router = express.Router()

router.post('/Ask', AskQuestion)