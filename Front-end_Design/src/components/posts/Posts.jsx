import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Jonny",
      userId: 1,
      profilePic:
        "https://media.cnn.com/api/v1/images/stellar/prod/211220145332-nba-tease.jpg?c=16x9&q=h_720,w_1280,c_fill",
      desc: "Lebron, My king!!! 👑 ",
      img: "https://cdn.vox-cdn.com/thumbor/VP9ze_V5SUnUHxqvgEg5TJLmykc=/0x0:1200x800/920x613/filters:focal(451x0:643x192):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71932486/lebron_getty_ringer.0.jpg",
    },
    {
      id: 2,
      name: "Kim",
      userId: 2,
      profilePic:
        "https://2.bp.blogspot.com/-jSp6HRcoEUc/WiZ2SMazxtI/AAAAAAANPIE/Lsr25i6xZbQIlsqfz_oGQrYDlIxfV-w8gCLcBGAs/s400/46FA682A00000578-5144219-She_is_represented_by_President_Kids_Management-a-3_1512466450257.jpg",
      desc: "Good luck for everyone!!!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
