export function TwitterFollowCard({
  formatUserName,
  children,
  userName,
  name,
  isFollowing = false,
}) {
  const imageSrc = `https://unavatar.io/${userName}`;
  // const addAt = (userName) => `@${userName}`;
  <span>{isFollowing}</span>;

  return (
    // <article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="Kitten" />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
