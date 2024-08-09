import PostPagination from "@/components/posts/PostPagination";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/ui/BackButton";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
