import { useState } from "react";

export function TwitterFollowCard({
  formatUserName,
  children,
  userName = "unknown",
  name,
  initialIsFollowing,
}) {
  const state = useState(initialIsFollowing);
  const [isFollowing, setIsFollowing] = state;

  console.log("[TwitterFollowCard] render with userName:", userName);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const imageSrc = `https://unavatar.io/${userName}`;
  // const addAt = (userName) => `@${userName}`;
  <span>{isFollowing}</span>;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    // <article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="" />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
