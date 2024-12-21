import { getYoutubeThumbnailUrl } from "@/utils/youtube";

export interface PrivateProject {
    id: number;
    title: string;
    image: string;
    link: string;
    tags: string[];
  }
  
  export const privateProjects: PrivateProject[] = [
    {
      id: 1,
      title: "サントリー天然水「水曜日はみずようび」",
      image: getYoutubeThumbnailUrl("doLnx10Xyq8"),
      link: "https://www.youtube.com/watch?v=doLnx10Xyq8",
      tags: ["企業","アニメーション"]
    },
    {
        id: 2,
        title: "TOKYO SPORTS STATION",
        image: getYoutubeThumbnailUrl("g-i6yPdmj2s"),
        link: "https://www.youtube.com/watch?v=g-i6yPdmj2s",
        tags: ["企業","アニメーション"]
      },
      {
        id: 3,
        title: "A LIFE WITH H2 / Japan Blue Energy Co., Ltd",
        image: getYoutubeThumbnailUrl("P1AWVguetAM"),
        link: "https://www.youtube.com/watch?v=P1AWVguetAM",
        tags: ["企業","アニメーション"]
      },
      {
        id: 4,
        title: "EED",
        image: getYoutubeThumbnailUrl("KFlo9Gb-Q9E"),
        link: "https://www.youtube.com/watch?v=KFlo9Gb-Q9E",
        tags: ["企業","アニメーション"]
      },
      {
        id: 5,
        title: "NEC Conection the Dots",
        image: getYoutubeThumbnailUrl("m1L84ngV3T4"),
        link: "https://www.youtube.com/watch?v=m1L84ngV3T4",
        tags: ["企業","アニメーション"]
      },
      {
        id: 6,
        title: "NEC DigitalKYC",
        image: getYoutubeThumbnailUrl("2SWaegR9jbs"),
        link: "https://www.youtube.com/watch?v=2SWaegR9jbs",
        tags: ["企業","アニメーション"]
      },
      {
        id: 7,
        title: "未来シナリオ 2050 – NEC未来創造会議 –",
        image: getYoutubeThumbnailUrl("mQWsdd8bxhg"),
        link: "https://www.youtube.com/watch?v=mQWsdd8bxhg",
        tags: ["企業","アニメーション"]
      },
    // 他の非公開プロジェクト
  ]