import express, { Request, Response, Router } from "express";
import Test from "../models/test";

const router: Router = express.Router();

// @route  GET
// @desc   Just return the video id send by the front end
// @access Public
router.get("/:testId", (req: Request, res: Response) => {
  const testId = parseInt(req.params.testId);

  if (!testId) {
    return res.status(403).send({ success: false, error: "Missing test id" });
  }

  Test.returnTest(testId)
    .then((result) => {
      return res.status(200).send({ success: true, result });
    })
    .catch((err) => {
      return res.status(500).send({
        success: false,
        error: err,
      });
    });
});

export default router;
