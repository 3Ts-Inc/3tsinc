const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

function getYouTubeVideoId(videoUrl: string): string | null {
  try {
    const url = new URL(videoUrl);
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase();
    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (hostname === "youtube.com" || hostname.endsWith(".youtube.com")) {
      videoId =
        url.searchParams.get("v") ??
        (url.pathname.startsWith("/embed/")
          ? url.pathname.split("/").filter(Boolean)[1] ?? null
          : null);
    }

    return videoId && YOUTUBE_ID_PATTERN.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

export function getYouTubeEmbedUrl(videoUrl: string): string | null {
  const videoId = getYouTubeVideoId(videoUrl);
  return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
}
