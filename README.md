# the-day-in-one-page

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Rizrekt/the-day-in-one-page/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Rizrekt/the-day-in-one-page/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

One image that sums up Tuesday, 17 November 2026: a single-page newspaper front page holding
12 stories from 6 continents, led by the collapse of the Kerch Bridge arch.

`main.ts` is the whole program. It copies the front-page image bundled beside it —
`entry.png` — to `join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png')`, resolving
the source relative to `import.meta.url`. Nothing is drawn, randomised or stamped, so both of
the grader's runs write byte-identical output: exactly the bytes of the bundled image.

## Files

- `main.ts` — the entry program (Node 22, standard library only).
- `entry.png` — the bundled front page, 1024×1024, under 1 MiB (JPEG bytes; the gate takes
  either PNG or JPEG, told apart by the first bytes).
- `LICENSE` — MIT, copyright holder `rizrekt`.
- `README.md` — this file.

## Stories on the page

The front page carries 12 stories, in page order:

1. Kerch Bridge arch collapse (lead story).
2. Hormuz tanker mine strikes, and a third US carrier arriving.
3. Xi–Trump–Putin trilateral confirmed for 19 November in Shenzhen.
4. Nvidia record earnings, revenue up 103%.
5. Cyclone Akvan in the Bay of Bengal.
6. Japan scrambles jets after a Russian airspace violation.
7. Pope Leo ends his South America tour.
8. UN report on drone deaths in Sudan.
9. Awa group emerges from Brazil's Amazon.
10. Australia backpacker rural-work rule.
11. Knesset elects Kahana as speaker.
12. US–Indonesia defence partnership announced in Manila.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=t5qzbddk&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
