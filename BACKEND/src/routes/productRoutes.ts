import express from 'express';
import {
  createProduct,
  createReview,
  deleteProduct,
  getProductById,
  getProductList,
  getProductSearch,
  updateProduct,
} from '../controllers/productControllers';


import { admin, auth } from '../middleware/auth';
const router = express.Router();

router.get('/',getProductList);
router.post('/',auth, admin, createProduct);
router.post('/:id/reviews',auth, createReview);
router.get('/search',getProductSearch);
router.get('/:id',getProductById);
router.put('/:id',auth, admin, updateProduct);
router.delete('/:id',auth, admin, deleteProduct);


// router.route('/').get(getProductList).post(auth, admin, createProduct);
// router.route('/:id/reviews').post(auth, createReview);
// router.route('/search').get(getProductSearch);
/*router
  .route('/:id')
  .get(getProductById)
  .put(auth, admin, updateProduct)
  .delete(auth, admin, deleteProduct);*/

export default router;