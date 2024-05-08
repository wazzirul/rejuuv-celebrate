import dynamic from 'next/dynamic';
import Head from 'next/head'
import Image from 'next/image'

const Celebrate = dynamic(
  () => import('../components/celebrate/index'),
  {
    ssr: 'false',
  }
);

export default function Home() {
  return (
    <Celebrate />
  )
}
