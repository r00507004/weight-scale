import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Feature, Footer, Form, Header, Hero, Screenshot } from "../components"
import heroImage from '../images/hero.png';
import feature1Image from '../images/feature1.png';
import feature2Image from '../images/feature2.png';
import feature3Image from '../images/feature3.png';

const IndexPage: React.FC<PageProps> = () => {

  const headerTitle = "スマート在庫管理 on kintone";
  const heroHeadLine = "IoTでkintoneをもっと便利に。在庫管理を自動化。";
  const heroSentence = "IoT重量計とkintoneをつないで、在庫管理を自動化します。在庫量の変化がリアルタイムでkintoneアプリに入力されます。";
  const feature1Headline = "在庫量の変化を自動で入力";
  const feature1Sentence = "IoT重量計が在庫量の変化を検知して、kintoneに自動で入力を行います。1グラムの変化を検知することができます。";
  const feature2Headline = "好きなアプリと組み合わせて使える";
  const feature2Sentence = "在庫管理用のkintoneアプリは、お客様が自由に作成、編集することができます。";
  const feature3Headline = "かんたんに導入できる";
  const feature3Sentence = "kintoneアプリにプラグインを読み込むだけで、かんたんに機能を導入することができます。";

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
          <Screenshot/>
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

export const Head: HeadFC = () => <title>スマート在庫管理 on kintone</title>