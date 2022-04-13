import * as express from "express";
import { Request, Response } from "express";
import PostService from "../service/post_service";
import { Container } from "typedi";

import asyncWrapper from "../util/async_wrapper";

const router = express.Router();
const postService = Container.get(PostService);

// 게시글 등록
router.post(
  "/",
  asyncWrapper(async (req: Request, res: Response) => {
    console.log("req.body", req.body);
    await postService.createPost(
      req.body.userIdx,
      req.body.title,
      req.body.contents
    );

    res.send();
  })
);

// 게시글 읽기
router.get(
  "/:idx",
  asyncWrapper(async (req: Request, res: Response) => {
    const postIdx: number = parseInt(req.params.idx);
    const post = await postService.readPost(postIdx);
    res.send(post);
  })
);
// 게시글 수정
router.put(
  "/:idx",
  asyncWrapper(async (req: Request, res: Response) => {
    const postIdx: number = parseInt(req.params.idx);
    await postService.updatePost(postIdx, req.body.contents);
  })
);
// 게시글 삭제
router.delete(
  "/:idx",
  asyncWrapper(async (req: Request, res: Response) => {
    const postIdx: number = parseInt(req.params.idx);
    await postService.deletePost(postIdx);
  })
);

export default router;
