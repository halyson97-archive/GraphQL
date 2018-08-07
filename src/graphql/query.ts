import { userQueries } from "./resources/user/user.schema";
import { postQueries } from "./resources/post/post.schema";
import { commentMutations } from "./resources/comment/comment.schema";

const Query = `
    type Query{
        ${commentMutations}
        ${postQueries}
        ${userQueries}        
    }
`;

export {
    Query
}