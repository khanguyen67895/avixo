import { TrackHero } from "@/sections/track-record/TrackHero";
import { TrackRecords } from "@/sections/track-record/TrackRecords";
import { TrackPhilosophy } from "@/sections/track-record/TrackPhilosophy";
import { TrackCTA } from "@/sections/track-record/TrackCTA";

export default function TrackRecordPage() {
  return (
    <>
      <TrackHero />
      <TrackRecords />
      <TrackPhilosophy />
      <TrackCTA />
    </>
  );
}
