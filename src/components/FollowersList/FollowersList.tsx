import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FollowersList.css";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get("https://randomuser.me/api?results=3");
      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower: any, index) => (
          <div className="follower-item" data-testid={`follower-item-${index}`} key={index}>
            <img src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
