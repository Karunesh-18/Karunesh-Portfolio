import Image from "next/image";
import { gallery } from "@/data/content";

// Endless CSS marquee: the list is rendered twice and slid by -50%.
// Hover or keyboard focus pauses it (see .gallery-* in globals.css).
export default function Gallery() {
  return (
    <div className="gallery-wrap" tabIndex={0} role="region" aria-label="Photo gallery">
      <div className="gallery-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {gallery.map((g) => (
              <li key={g.file}>
                <Image src={`/placeholders/${g.file}`} alt={copy === 0 ? g.caption : ""} width={1000} height={1250} />
                <span className="mono">{g.caption}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
