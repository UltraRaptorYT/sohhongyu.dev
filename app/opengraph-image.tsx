import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Soh Hong Yu. Building things no one asked for.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const avatar = await readFile(
    join(process.cwd(), "public", "Profile Photo without Background.png"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f7f7f5",
        color: "#242422",
        padding: "64px 74px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 19,
          letterSpacing: 4,
          color: "#74746e",
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: 50,
            background: "#c33329",
          }}
        />
        SOH HONG YU
      </div>
      <div
        style={{
          position: "absolute",
          top: 37,
          right: 74,
          display: "flex",
          padding: 10,
          background: "transparent",
          borderRadius: 16,
          transform: "rotate(3deg)",
        }}
      >
        {/* ImageResponse renders embedded bytes rather than next/image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${avatar.toString("base64")}`}
          width={135}
          height={135}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 57,
          fontSize: 86,
          letterSpacing: -5,
          lineHeight: 1.05,
        }}
      >
        <span>building things</span>
        <span>
          no one asked for<span style={{ color: "#c33329" }}>.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #deded9",
          paddingTop: 25,
          marginTop: "auto",
          fontSize: 18,
          color: "#74746e",
        }}
      >
        <span>AI + Software Engineer / NUS Computer Science</span>
        <span>sohhongyu.dev ↗</span>
      </div>
    </div>,
    { ...size },
  );
}
