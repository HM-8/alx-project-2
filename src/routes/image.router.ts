import { Router, Request, Response } from 'express';
import { deleteLocalFiles, filterImageFromURL, isValidUrl } from '../util/util';
const router: Router = Router();

// Filter image
router.get("/", async (req: Request, res: Response) => {
    const image_url: string = req.query.image_url.toString();
    var file: string;
    const files: Array<string> = [];
    console.log(image_url);
    if (isValidUrl(image_url)) {
        try {
            file = await filterImageFromURL(image_url);
            res.status(200).sendFile(file, () => {
                files.push(file);
                console.log("Files", files);
                deleteLocalFiles(files);
            });
        } catch (error) {
            console.error("ERROR: ", error);
        }
    } else {
        res.status(400).send("Send a valid image url!");
    }
});

export const ImageRouter: Router = router;