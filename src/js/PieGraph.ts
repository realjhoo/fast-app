export function injectPie() {
  let pieMarkup = `<div class="pie-wrapper">
        <div class="first-watch pie-pieces">
        </div>

        <div class="second-watch pie-pieces">
        </div>

        <div class="third-watch pie-pieces">
        </div>

        <div class="fourth-watch pie-pieces">
        </div>

        <div class="fifth-watch pie-pieces">
        </div>

        <div id="sixth-watch-wrapper">
          <div class="sixth-watch pie-pieces">
          </div>
        </div>

        <div class="center-display">
          <span class="center-text">Time Remaining:</span>
          <span class="center-time"></span>
        </div>
      </div>`;

  let app = document.querySelector(".app") as HTMLDivElement;

  app.innerHTML = pieMarkup;
}
