import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "ZM7",
      img: "https://cdnb.artstation.com/p/assets/images/images/017/293/243/large/naishi-zhang-00touxiang.jpg?1555398680",
    },
    {
      id: 2,
      name: "HelloWorld",
      img: "https://cdnb.artstation.com/p/assets/images/images/017/292/775/large/naishi-zhang-1.jpg?1555396562",
    },
    {
      id: 3,
      name: "Joe",
      img: "https://cdna.artstation.com/p/assets/images/images/058/895/704/large/jose-daniel-cabrera-pena-fenrir-death-art.jpg?1675194820",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories