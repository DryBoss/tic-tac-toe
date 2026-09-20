# ⭕❌ Tic Tac Toe (10×10, Five-in-a-Row)

A two-player, same-device Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript — with a twist: it's played on a **10×10 board**, and you win by getting **five in a row** (horizontally, vertically, or diagonally), Gomoku-style, rather than the classic 3×3 three-in-a-row.

## 🎮 How to Play

- Two players share one device, alternating turns starting with **O**.
- Hover over an empty cell to preview your mark before placing it.
- Click a cell to place your mark (O or X).
- The turn automatically switches after each move.
- Get **five marks in a row** — in any direction — to win. A win dialog announces the winner with a "play again" option.
- Use the restart button at any time to clear the board and start over.

## 🗂️ Project Structure

```
tic-tac-toe/
├── index.html               # Page markup: game board, restart button, win dialog
├── images/
│   └── icons/
│       ├── nought.png          # Placed "O" mark
│       ├── nought-turn.png     # "O" hover preview
│       ├── cross.png           # Placed "X" mark
│       ├── cross-turn.png      # "X" hover preview
│       └── tic-tac-toe-favicon.png
├── sass/
│   └── main.scss            # Source Sass for styling
└── main/
    ├── css/
    │   └── main.css          # Compiled stylesheet
    └── js/
        ├── main.js           # Wires up cell hover/click events
        ├── cell.js           # Board state, mark placement, win detection, reset
        └── style.js           # Mobile viewport-height fix
```

## ⚙️ How It Works (Under the Hood)

- The board is a CSS grid; `cell.js` builds a 10×10 grid of `.cell` divs (`drawCells`), each holding an `<img>` used to show the O/X mark.
- Board state lives in a 10×10 array (`cellsData`) of `"o"` / `"x"` / `""` values.
- On hover, `showPossibleMark` displays a faded preview of the current player's mark; `hidePossibleMark` clears it on mouse-out.
- On click, `placeMark` commits the mark to `cellsData` and swaps the preview image for the solid one.
- `checkWin` scans every row, column, and both diagonal directions for five consecutive matching marks after each move, then hands the turn to the other player via `changeTurn`.
- When a line of five is found, `winDialog` freezes input (`dialogActive`) and shows the win dialog with the winning mark.
- `resetGame` (wired to both the restart button and "play again") clears the board, hides the dialog, and resets the turn to O.

## 🚀 Running Locally

This is a static site with no build step or external dependencies (beyond a Google Font).

Because `main.js` is loaded as an ES module (`type="module"`), open it via a local server rather than directly from the filesystem:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL (e.g. `http://localhost:8000`) in your browser.

If you'd rather work from the Sass source, compile `sass/main.scss` to `main/css/main.css` with your Sass compiler of choice, e.g.:

```bash
npx sass sass/main.scss main/css/main.css
```

## 🛠️ Tech Stack

- Vanilla HTML, CSS (Sass), and JavaScript (ES modules)
- No frameworks or build tools required to run
- Google Fonts (`Press Start 2P`) for the retro pixel look

## ✏️ Customizing

- **Board size**: Change the loop bounds in `drawCells` (`cell.js`) and the size of the `cellsData` array together — they must match.
- **Win length**: The "5 in a row" requirement is hardcoded in the row/column/diagonal scans in `checkWin` — adjust the inner loop length and the diagonal loop ranges to change it.
- **Marks/icons**: Swap the images in `images/icons/` for different piece styles.
- **Styling**: Edit `sass/main.scss` and recompile, or edit `main/css/main.css` directly.

## 💬 Feedback

Feedback and suggestions are welcome — feel free to open an issue or reach out to [DryBoss](https://github.com/DryBoss) on GitHub.
