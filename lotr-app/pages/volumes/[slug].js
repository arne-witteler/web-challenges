import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, books, cover } = currentVolume;

  return (
    <div>
      <Link href="/">All Volumes</Link>
      <Head>
        <title>
          {title} - {books}
        </title>
      </Head>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} width={140} height={230} alt={`Cover of ${title}`} />
    </div>
  );
}
