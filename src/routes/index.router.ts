import { Router } from 'express';
import { ImageRouter } from './image.router';
const router: Router = Router();

router.use('/filteredimage', ImageRouter);

export const IndexRouter: Router = router;