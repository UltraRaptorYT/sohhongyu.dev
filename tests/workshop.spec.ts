import { expect, test } from "@playwright/test";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

test("workshop navigation and project dialogs work without browser errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Soh Hong Yu — AI & Software Engineer");
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(247, 247, 245)",
  );
  await page.getByRole("link", { name: "Enter workshop", exact: true }).click();
  await expect(page).toHaveURL(/#workshop$/);

  for (const name of ["FilmGram", "Enchanted Notebook", "L.A.R.P.", "PickMe"]) {
    const trigger = page.getByRole("button", {
      name: `View ${name} project`,
      exact: true,
    });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name, exact: true });
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
  }
  expect(errors).toEqual([]);
});

test("command palette supports keyboard search, navigation, no results, and dismissal", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open command palette" });
  await trigger.focus();
  await page.keyboard.press("Control+k");
  const input = page.getByRole("combobox");
  await expect(input).toBeFocused();
  await input.fill("experience");
  await expect(page.getByRole("option")).toHaveCount(1);
  await input.press("Enter");
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.locator("#experience")).toBeInViewport();

  await page.keyboard.press("Meta+k");
  await input.fill("nothingmatches123");
  await expect(
    page.getByText("Nothing in this drawer.", { exact: false }),
  ).toBeVisible();
  await input.press("ArrowDown");
  await input.press("Enter");
  await expect(input).toBeVisible();
  await input.fill("");
  await input.press("ArrowUp");
  await expect(page.getByRole("option", { selected: true })).toContainText(
    "Random project",
  );
  await input.press("Enter");
  await expect(page).toHaveURL(/#(filmgram|notebook|larp|pickme)$/);

  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("modal focus is trapped and background click dismisses it", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "View FilmGram project", exact: true })
    .click();
  const dialog = page.getByRole("dialog", { name: "FilmGram", exact: true });
  const close = dialog.getByRole("button", { name: "Close project details" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: /View source/ })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.mouse.click(5, 5);
  await expect(dialog).not.toBeVisible();
});

test("hackathon stickers expand and the uploaded resume downloads unchanged", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const sticker = page.locator(".award-sticker").first();
  const summary = sticker.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(sticker).toHaveAttribute("open", "");
  await expect(sticker.getByText(/Singen\. Everyone built/)).toBeVisible();
  await expect(
    sticker.getByRole("link", { name: "Meet the build" }),
  ).toHaveAttribute("href", "https://github.com/UltraRaptorYT/Singen");
  await page.keyboard.press("Enter");
  await expect(sticker).not.toHaveAttribute("open", "");
  await page.getByRole("link", { name: "The resume version" }).click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Soh Hong Yu",
  );
  await expect(
    page.locator('iframe[title="Soh Hong Yu\'s uploaded resume"]'),
  ).toHaveAttribute("src", "/resume/document");
  const downloadEvent = page.waitForEvent("download");
  await page
    .getByRole("link", { name: "Download resume", exact: true })
    .click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("Soh-Hong-Yu-Resume.pdf");
  expect(await download.failure()).toBeNull();
  const original = await readFile(
    join(process.cwd(), "app/resume/SohHongYu_Resume_caa20260917.pdf"),
  );
  for (const [path, disposition] of [
    ["/resume/download", "attachment"],
    ["/resume/document", "inline"],
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect(response.headers()["content-disposition"]).toContain(disposition);
    expect((await response.body()).equals(original)).toBe(true);
  }
});

test("mobile layout has no horizontal overflow and supports touch navigation", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 600, 768, 1024]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open command palette" }).click();
  await page.getByRole("combobox").fill("contact");
  await page.getByRole("option").click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact")).toBeInViewport();
  await expect(
    page.locator("#contact").getByRole("link", { name: /Say hello/ }),
  ).toHaveAttribute("href", "mailto:sohhongyu@gmail.com");
  const dock = page.getByRole("navigation", { name: "Quick navigation" });
  await expect(dock).toHaveAttribute("data-visible", "true");
  await dock.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page.locator("#projects-heading")).toBeInViewport();
  await page.goto("/");
  await page.screenshot({
    path: testInfo.outputPath("workshop-mobile.png"),
    fullPage: true,
  });
});

test("content stays available without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#projects")).toContainText("Enchanted Notebook");
  await expect(
    page.locator("#contact").getByRole("link", { name: /Say hello/ }),
  ).toBeVisible();
  await context.close();
});

test("social metadata and desktop rendering are ready", async ({
  page,
  request,
}, testInfo) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /opengraph-image/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://sohhongyu.dev",
  );
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  await page.screenshot({
    path: testInfo.outputPath("workshop-desktop.png"),
    fullPage: true,
  });
});

test("the uploaded avatar is used by the site and all browser icons", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const avatar = page.getByRole("img", {
    name: "UltraRaptor, a red avatar with sunglasses and headphones",
    exact: true,
  });
  await expect(avatar).toBeVisible();
  await expect(avatar).toHaveJSProperty("complete", true);
  expect(
    await avatar.evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(0);
  await expect(page.locator('link[rel="icon"][sizes="32x32"]')).toHaveAttribute(
    "href",
    "/favicon-32x32.png?v=transparent",
  );
  await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute(
    "href",
    /apple-touch-icon\.png/,
  );
  for (const path of [
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/apple-touch-icon.png",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
    "/avatar.webp",
  ]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toMatch(/^image\//);
  }
  const favicon = await (await request.get("/favicon.ico")).body();
  expect(favicon.readUInt16LE(2)).toBe(1);
  expect(favicon.readUInt16LE(4)).toBeGreaterThan(0);
  const png = await (await request.get("/favicon-32x32.png")).body();
  expect((await sharp(png).metadata()).hasAlpha).toBe(true);
  expect((await sharp(png).stats()).channels[3].min).toBe(0);
  await expect(page.locator(".wordmark .brand-avatar")).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)",
  );
});

test("the build sequence is driven by scroll and can be skipped", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const sequence = page.locator("#build-loop");
  await expect(sequence).toHaveClass(/sequence-enhanced/);
  const range = await sequence.evaluate((element) => ({
    top: element.getBoundingClientRect().top + window.scrollY,
    distance: element.getBoundingClientRect().height - window.innerHeight,
  }));
  for (const [index, progress] of [0.08, 0.35, 0.64, 0.97].entries()) {
    await page.evaluate(
      ({ range, progress }) =>
        window.scrollTo({
          top: range.top + range.distance * progress,
          behavior: "instant",
        }),
      { range, progress },
    );
    await expect(sequence).toHaveAttribute("data-step", String(index));
    await expect(
      page.locator('.sequence-steps [aria-current="step"]'),
    ).toHaveCount(1);
    await expect(page.locator(".sequence-sticky")).toBeInViewport();
  }
  await expect(page.locator(".sequence-product")).toHaveCSS("opacity", "1");
  await page.screenshot({
    path: testInfo.outputPath("build-sequence-shipped.png"),
  });
  await page.getByRole("link", { name: "Skip to the things" }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator("#experience-heading")).toBeInViewport();
  await page.goto("/");
  await page.screenshot({ path: testInfo.outputPath("hero-avatar.png") });
});

test("reduced motion and mobile show the complete process without pinning", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const sequence = page.locator("#build-loop");
  await expect(sequence).not.toHaveClass(/sequence-enhanced/);
  await expect(sequence).toHaveAttribute("data-step", "3");
  await expect(page.locator(".sequence-sticky")).toHaveCSS(
    "position",
    "static",
  );
  await expect(page.locator(".sequence-product")).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-portrait")).toHaveCSS("translate", "none");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(sequence).not.toHaveClass(/sequence-enhanced/);
  await expect(page.locator(".sequence-sticky")).toHaveCSS(
    "position",
    "static",
  );
  await expect(page.locator(".sequence-steps li")).toHaveCount(4);
});

test("resume-sourced facts are shown consistently on the homepage", async ({
  page,
}) => {
  await page.goto("/");
  const experience = page.locator("#experience");
  await expect(experience).toContainText("Apr 2023 → Jun 2024");
  await expect(experience).toContainText("Cybersecurity Group");
  await expect(experience).toContainText("Ministry of Education");
  await expect(experience).toContainText("Sep 2021 → Nov 2022");
  await expect(experience).toContainText("67%+");
  await expect(page.locator("#about")).toContainText("3.97/4.00");
  await expect(page.locator("#about")).toContainText(
    "Aug 2026 → May 2030 (expected)",
  );
  await expect(page.locator("#pickme")).toContainText(
    "Rezolve AI challenge winner",
  );
  await expect(page.locator("#pickme")).toContainText("FastAPI");
  await expect(page.locator("#filmgram")).toContainText(
    "code-first AI pipeline",
  );
  await expect(page.locator("#filmgram")).toContainText("Node.js");
});

test("project archive supports deep links, search, categories, years and reset", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Built for actual humans/ }).click();
  await expect(page).toHaveURL(/\/projects#overcooked$/);
  await expect(page.locator("#overcooked")).toBeInViewport();
  await expect(page.locator("#overcooked")).toContainText("80+");
  await expect(
    page
      .locator("#overcooked")
      .getByRole("link", { name: "Overcooked IRL source code" }),
  ).toHaveAttribute("href", "https://github.com/UltraRaptorYT/Overcooked");
  const totalProjects = await page.locator(".archive-row").count();
  expect(totalProjects).toBeGreaterThan(50);
  await page
    .getByRole("searchbox", { name: "Search projects" })
    .fill("Whisper");
  await expect(page.locator(".archive-row")).toHaveCount(1);
  await expect(page.locator(".archive-row")).toContainText(
    "Live WebGPU Transcription",
  );
  await page.getByRole("button", { name: "Clear filters" }).click();
  await page
    .getByRole("button", { name: "Games & events", exact: true })
    .click();
  await page
    .getByRole("combobox", { name: "Filter by year" })
    .selectOption("2026");
  await expect(page.locator(".archive-row")).toHaveCount(5);
  await page.getByRole("searchbox").fill("nothing matches this");
  await expect(
    page.getByRole("heading", { name: "Nothing in this drawer." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show all projects" }).click();
  await expect(page.locator(".archive-row")).toHaveCount(totalProjects);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/projects");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: testInfo.outputPath("project-archive-mobile.png"),
  });
});

test("Beacons project links, grouped demos and undated entries are retained", async ({
  page,
}) => {
  await page.goto("/projects");
  await expect(
    page.locator("#pickme").getByRole("link", { name: "Open PickMe project" }),
  ).toHaveAttribute("href", "https://pickme-lifehack.vercel.app/");
  await expect(page.locator("#pickme")).toContainText(
    "Rezolve AI challenge winner",
  );
  await expect(
    page
      .locator("#taskgoblin")
      .getByRole("link", { name: "TaskGoblin: Telegram bot" }),
  ).toHaveAttribute("href", "https://t.me/taskgoblin_launch_bot");
  await expect(
    page
      .locator("#unicorn-adventure")
      .getByRole("link", { name: "A Unicorn's Adventure: Watch demo" }),
  ).toHaveAttribute("href", "https://youtu.be/1NT2MHYKP7Q");
  await expect(
    page
      .locator("#medipill")
      .getByRole("link", { name: "MediPill: Admin console" }),
  ).toHaveAttribute("href", "https://ultraraptoryt.github.io/SIP-Medication/");
  await page
    .getByRole("combobox", { name: "Filter by year" })
    .selectOption("Undated");
  await expect(page.locator(".archive-row")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "DR Go", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "RUBI Chatbot", exact: true }),
  ).toBeVisible();
});
