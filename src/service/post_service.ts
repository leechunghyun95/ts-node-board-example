import { Service } from "typedi";
import Post from "../model/post";

@Service()
export default class PostService {
  // 게시글 등록
  async createPost(userIdx: number, title: string, contents: string) {
    // post 테이블에 등록
    await Post.create({
      title: title,
      contents: contents,
      writer: userIdx,
    });
  }

  // 게시글 읽기
  async readPost(postIdx: number) {
    const post = await Post.findOne({ where: { idx: postIdx } });
    return post;
  }

  // 게시글 내용 수정
  async updatePost(postIdx: number, newContents: string) {
    await Post.update(
      {
        contents: newContents,
      },
      { where: { idx: postIdx } }
    );
  }

  // 게시글 삭제
  async deletePost(postIdx: number) {
    await Post.destroy({ where: { idx: postIdx } });
  }
}
