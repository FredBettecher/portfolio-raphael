export function HomePage() {
  return (
    <section className="overflow-hidden opacity-70 border-b">
      <video autoPlay muted className="object-cover w-screen h-screen" id="video-background" draggable='false'>
        <source src="/videos/videoBackground.mp4" type="video/mp4"/>
      </video>
    </section>
  );
}
