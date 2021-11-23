import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="header">First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/nextImage.png" // Route of the image file
        height={200} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Next Logo"
      />
      <style jsx>{`
        .header {
          text-align: center;
        }
      `}</style>
    </>
  );
}
