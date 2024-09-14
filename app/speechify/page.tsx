import Head from 'next/head'
import TextToSpeech from '@/components/TextToSpeech'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Text-to-Speech Demo</title>
        <meta name="description" content="A text-to-speech demo using the Web Speech API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-8">
        <TextToSpeech />
      </main>
    </div>
  )
}
