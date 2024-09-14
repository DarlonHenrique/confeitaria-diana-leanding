import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Confeitaria Diana";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Font
  const biteChocolate = fetch(
    new URL("./bite-chocolate.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Confeitaria Diana
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "BiteChocolate",
          data: await biteChocolate,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
