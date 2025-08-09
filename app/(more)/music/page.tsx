import { LatestSong } from "@/components/misc/(music)/latest-song";
import TopAblums from "@/components/misc/(music)/top-albums";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "yz // music",
  description: "Get an Idea of my music taste.",
};

// Opt out of static generation or add revalidation
export const dynamic = 'force-dynamic'; // or 'auto' with revalidate
// export const revalidate = 3600; // Revalidate every hour if using static generation

const MusicPage = async () => {
  return (
    <section>
      <div className="pb-10">
        <h1 className="text-2xl font-bold pb-8">Music</h1>
        <p>
          Music has always been something near to my heart. Whether it&apos;s a
          happy day or a sad one, there is a memory linked with it, and a song
          that accompanies the moment.
        </p>
      </div>

      {/* Latest Song with error boundary */}
      <div className="mb-10">
        <LatestSong className="min-w-0 max-w-full" />
      </div>

      {/* Favorite Tracks section */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold py-8">Fav Tracks</h1>
        <p className="mb-6">
          I listen to a lot of Spotify, Over the last 12 months, I&apos;ve played
          the song イザベラの唄 by Takahiro Obata exactly 146 times! Below you can
          find an up-to-date collection of my favourite songs from the past ~4
          weeks.
        </p>
        <TopAblums />
      </div>
    </section>
  );
};

export default MusicPage;
