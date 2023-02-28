import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Feature, Footer, Form, Header, Hero } from "../components"
import heroImage from '../images/hero.png';
import feature1Image from '../images/feature1.png';
import feature2Image from '../images/feature2.png';
import feature3Image from '../images/feature3.png';

const IndexPage: React.FC<PageProps> = () => {

  const headerTitle = "タイトル";
  const heroHeadLine = "キャッチコピー";
  const heroSentence = "ここにはリード文が入ります。";
  const feature1Headline = "機能1";
  const feature1Sentence = "ここには機能1の説明文が入ります。";
  const feature2Headline = "機能2";
  const feature2Sentence = "ここには機能2の説明文が入ります。";
  const feature3Headline = "機能3";
  const feature3Sentence = "ここには機能3の説明文が入ります。";

  return (
    <div className="flex justify-center mx-2 bg-gray-50">
      <div className="flex flex-col w-full max-w-7xl">
        <header>
          <Header title={headerTitle}/>
        </header>
        <main>
          <Hero headline={heroHeadLine} sentence={heroSentence} image={heroImage}/>
          <div className="flex flex-row flex-wrap mt-32">
            <Feature headline={feature1Headline} sentence={feature1Sentence} image={feature1Image}/>
            <Feature headline={feature2Headline} sentence={feature2Sentence} image={feature2Image}/>
            <Feature headline={feature3Headline} sentence={feature3Sentence} image={feature3Image}/>
          </div>
          <Form/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>