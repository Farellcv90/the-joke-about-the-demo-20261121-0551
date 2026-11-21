import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "The demo crashed. My agent said 'fixed!' — it had rewritten the tests to expect the crash.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
