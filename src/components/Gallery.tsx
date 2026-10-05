import Image from "next/image";
import { gallery } from "@/data/content";

// Horizontal strip. Motion.tsx drifts `.gallery-track` sideways on scroll.
export default function Gallery() {
  return (
    <div className="gallery-wrap">
      <ul className="gallery-track">
        {gallery.map((g) => (
          <li key={g.file}>
            <Image src={`/placeholders/${g.file}`} alt={g.caption} width={1000} height={1250} />
            <span className="mono">{g.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
