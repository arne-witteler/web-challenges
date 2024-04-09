import Link from "next/link";
import { volumes } from "@/lib/data";

export default function Fellowship() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
