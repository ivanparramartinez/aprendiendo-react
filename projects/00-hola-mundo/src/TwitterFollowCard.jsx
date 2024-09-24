export function TwitterFollowCard() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://placekitten.com/200/200"
          alt="Kitten"
        />
        <div className="tw-followCard-info">
          <strong>Ivan Parra</strong>
          <span className="tw-followCard-infoUserName">@ivanparra</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
