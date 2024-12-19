import { getYoutubeThumbnail } from "@/utils/youtube";

export interface PrivateProject {
    id: string;
    title: string;
    image: string;
    link: string;
    tags: { name: string; url: string; }[];
  }
  
  export const privateProjects: PrivateProject[] = [
    {
      id: "1",
      title: "サントリー天然水「水曜日はみずようび」",
      image: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=doLnx10Xyq8",
      tags: [
        { name: "ドローン", url: "https://youtube.com/watch?v=VIDEO_ID_1" },
        { name: "東京", url: "https://www.youtube.com/watch?v=doLnx10Xyq8" }
      ]
    },
    {
        id: "2",
        title: "TOKYO SPORTS STATION",
        image: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=g-i6yPdmj2s",
        tags: [
          { name: "ドローン", url: "https://youtube.com/watch?v=VIDEO_ID_1" },
          { name: "東京", url: "https://www.youtube.com/watch?v=g-i6yPdmj2s" }
        ]
      },
      {
        id: "3",
        title: "A LIFE WITH H2 / Japan Blue Energy Co., Ltd",
        image: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=P1AWVguetAM",
        tags: [
          { name: "ドローン", url: "https://youtube.com/watch?v=VIDEO_ID_1" },
          { name: "東京", url: "https://www.youtube.com/watch?v=P1AWVguetAM" }
        ]
      },
      {
        id: "4",
        title: "EED",
        image: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=KFlo9Gb-Q9E",
        tags: [
          { name: "ドローン", url: "https://youtube.com/watch?v=VIDEO_ID_1" },
          { name: "アニメーション", url: "https://www.youtube.com/watch?v=KFlo9Gb-Q9E" }
        ]
      },
    // 他の非公開プロジェクト
  ]