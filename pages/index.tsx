import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

function index() {
  return (
    <>
      <Header label="Główna" />
      <Form placeholder="Co ptaki śpiewają?" />
      <PostFeed />
    </>
  );
}

export default index;
