import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/058/895/533/large/jose-daniel-cabrera-pena-freya-attack-art.jpg?1675194570"
                alt=""
              />
              <span>GAI</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/011/699/523/large/jose-daniel-cabrera-pena-aven1-lg.jpg?1530925827"
                alt=""
              />
              <span>NAWUKE</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/058/661/675/large/anna-kurbatova-2.jpg?1674673658"
                alt=""
              />
              <p>
                <span>Janneee</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/002/813/089/large/jose-daniel-cabrera-pena-a.jpg?1466010393"
                alt=""
              />
              <p>
                <span>God War</span> posted new picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>


        </div>
        <div className="item">
          <span>Online Friends</span>


          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/058/661/675/large/anna-kurbatova-2.jpg?1674673658"
                alt=""
              />
              <div className="online" />
              <span>Janneee</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/002/813/089/large/jose-daniel-cabrera-pena-a.jpg?1466010393"
                alt=""
              />
              <div className="online" />
              <span>God War</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                  src="https://cdna.artstation.com/p/assets/images/images/058/723/728/large/laila-kassem-pose1.jpg?1674820478"
                  alt=""
              />
              <div className="online" />
              <span>44神奇88</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RightBar;
