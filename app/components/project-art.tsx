import { Icon } from "./icons";

export function FilmArt({ hero = false }: { hero?: boolean }) {
  return (
    <div
      className={`film-editor ${hero ? "hero-editor" : ""}`}
      aria-hidden="true"
    >
      <div className="editor-titlebar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>filmgram / a-weekend-well-spent</span>
        <Icon name="spark" />
      </div>
      <div className="editor-toolbar">
        <span>
          <b>f.</b> FilmGram
        </span>
        <span className="editor-export">Export ↗</span>
      </div>
      <div className="editor-main">
        <div className="editor-sidebar">
          <Icon name="folder" />
          <Icon name="spark" />
          <Icon name="code" />
          <span>+</span>
        </div>
        <div className="film-frame">
          <div className="frame-grid" />
          <span className="frame-label">
            A FILM BY SOMEONE WHO DOESN&apos;T EDIT
          </span>
          <div className="film-title">
            good ideas.
            <br />
            <em>great weekends.</em>
          </div>
          <div className="frame-bottom">
            <span>SINGAPORE, 2026</span>
            <span>01 / 04</span>
          </div>
          <div className="film-orbit orbit-one" />
          <div className="film-orbit orbit-two" />
          <div className="film-orbit orbit-three" />
        </div>
      </div>
      <div className="editor-playback">
        <span>↶ &nbsp; ↷</span>
        <span>
          ◀ &nbsp; <Icon name="play" /> &nbsp; ▶
        </span>
        <span>
          00:08 <i>/ 00:24</i>
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-ruler">
          <span>00:00</span>
          <span>00:08</span>
          <span>00:16</span>
          <span>00:24</span>
        </div>
        <div className="timeline-track">
          <span className="clip clip-one">a little idea.mp4</span>
          <span className="clip clip-two">the process.mp4</span>
          <span className="clip clip-three">the result.mp4</span>
        </div>
        <div className="audio-track">
          {Array.from({ length: 48 }, (_, i) => (
            <i key={i} style={{ height: `${5 + ((i * 17 + 7) % 16)}px` }} />
          ))}
        </div>
        <div className="playhead">
          <i />
        </div>
      </div>
      <div className="editor-status">
        <span>
          <i className="status-dot" /> All changes saved
        </span>
        <span>LESS EDITING. MORE MAKING.</span>
      </div>
    </div>
  );
}

export function NotebookArt() {
  return (
    <div className="notebook-art" aria-hidden="true">
      <span className="notebook-margin-label">a very normal notebook</span>
      <div className="notebook-page">
        <div className="notebook-holes">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="notebook-date">19.09 / a thought</span>
        <div className="handwritten question">
          what if my notebook
          <br />
          could think?
        </div>
        <div className="notebook-answer">
          <span className="tiny-spark">✧</span>
          <p>
            then I&apos;d probably
            <br />
            ask for a day off.
          </p>
          <span className="notebook-cursor">│</span>
        </div>
        <svg className="notebook-doodle" viewBox="0 0 100 55" fill="none">
          <path
            d="M5 27C17 5 32 45 40 25S55 5 63 26s21 0 28-8M66 45c4-9 14-10 20-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="notebook-footnote">
          not your average autocomplete.
        </span>
      </div>
      <span className="pencil" />
    </div>
  );
}

export function GraphArt() {
  return (
    <div className="graph-art" aria-hidden="true">
      <span className="art-corner-label">
        <span className="status-dot" /> dependency map
      </span>
      <svg viewBox="0 0 500 250" className="graph-connections">
        <path d="M90 125H180Q200 125 200 70H270M200 125Q200 185 220 185H280M330 70h35q15 0 15 55h65M340 185h25q15 0 15-60" />
        <path
          className="active-connection"
          d="M90 125H180Q200 125 200 70H270"
        />
      </svg>
      <div className="graph-node root-node">
        <Icon name="file" />
        <span>
          Regulatory change<small>MAS · updated requirement</small>
        </span>
        <span className="node-dot" />
      </div>
      <div className="graph-node policy-node">
        <Icon name="folder" />
        <span>
          Policy<small>2 dependencies</small>
        </span>
      </div>
      <div className="graph-node team-node">
        <Icon name="code" />
        <span>
          Operations<small>3 teams affected</small>
        </span>
      </div>
      <div className="graph-node impact-node">
        <Icon name="bolt" />
        <span>
          Impact
          <br />
          identified
        </span>
      </div>
      <span className="graph-caption">one change. see the whole picture.</span>
    </div>
  );
}

export function PickMeArt() {
  return (
    <div className="pickme-art" aria-hidden="true">
      <span className="art-corner-label">THE NEW CUSTOMER JOURNEY</span>
      <div className="shop-loop">
        <div className="shop-product">
          <div className="product-box">
            <span>
              the
              <br />
              next
              <br />
              <b>thing.</b>
            </span>
            <i>↗</i>
          </div>
          <span>Your product</span>
        </div>
        <span className="loop-arrow">→</span>
        <div className="shop-agent">
          <div className="agent-face">
            <i />
            <i />
            <span />
          </div>
          <span>AI shopper</span>
        </div>
        <span className="loop-arrow">→</span>
        <div className="shop-critique">
          <Icon name="check" />
          <div />
          <div />
          <div />
          <span>
            The honest
            <br />
            feedback
          </span>
        </div>
      </div>
      <div className="feedback-loop">
        <span>←</span> refine. test. repeat.
      </div>
    </div>
  );
}
