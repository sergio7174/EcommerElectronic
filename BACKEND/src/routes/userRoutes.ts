import express from 'express';
import {
  login,
  register,
  getUsersList,
  getUserBydId,
  deleteUser,
  updatrUserProfile,
  promoteAdmin,
} from '../controllers/userControllers';
import { admin, auth } from '../middleware/auth';

const router = express.Router();

router.get('/',getUsersList);
router.post('/promote/:id', auth, admin, promoteAdmin);
router.get('/:id',getUserBydId);
router.delete('/:id',auth, admin, deleteUser);
router.put('/:id', updatrUserProfile);
router.post('/register', register);
router.post('/login', login);

export default router;