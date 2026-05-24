export function VideoEmbed({ youtubeId }: { youtubeId: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border border-cyber-magenta/30 glow-magenta">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="Tutorial video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
