"use client";

import Image from "next/image";
import icEvent1 from "@/public/images/ic_event1.png";
import icEvent2 from "@/public/images/ic_event2.png";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";

export function AboutEvents() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
          <div className="flex flex-col items-center text-center mb-12">
            <Text as="h2" className="text-4xl md:text-4xl text-zinc-900 mb-3">Sự kiện nổi bật</Text>
            <p className="text-[#505050] max-w-lg">Những dấu ấn quan trọng trong hành trình phát triển của AVIXO và cộng đồng đầu tư.</p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={icEvent1} alt="Event 1" className="w-full h-auto object-contain" />
          <Image src={icEvent2} alt="Event 2" className="w-full h-auto object-contain" />
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="primary" href="/news">Xem thêm</Button>
        </div>

      </div>
    </section>
  );
}
