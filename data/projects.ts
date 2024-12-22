import { getYoutubeThumbnailUrl } from "@/utils/youtube";

export interface Project {
    id: number;
    title: string;
    image: string;
    link: string;
    // description: string;
    // data?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "【山田五郎×村上隆】スペシャルトーク！「村上隆 もののけ 京都」を語る",
        image: getYoutubeThumbnailUrl("PF6Uxl9rStw"),
        link: "https://www.youtube.com/watch?v=PF6Uxl9rStw&t=134s",
      },
      {
        id: 2,
        title: "実は「私」って安定してない？自分らしく生きるヒント | 森星のBeyond Gender",
        image: getYoutubeThumbnailUrl("O5zTbqXbIiM"), 
        link: "https://www.youtube.com/watch?v=O5zTbqXbIiM",
      },
      {
        id: 3,
        title: "宇野亞喜良展 AQUIRAX UNO 宇野亞喜良インタビュー「多少の裏切りも快感」",
        image: getYoutubeThumbnailUrl("rWm0Ia-IX-s"),   
        link: "https://www.youtube.com/watch?v=rWm0Ia-IX-s&t=67s",
      },
      {
        id: 4,
        title: "梅沢和木×布施琳太郎×GILLOCHINDOX☆GILLOCHINDAEインタビュー：「スーパーフラット」以降の日本現代アートの20年【Tokyo Art Beat 20周年特集】",
        image: getYoutubeThumbnailUrl("2R986pz0sKA"),        
        link: "https://www.youtube.com/watch?v=2R986pz0sKA&t=156s",
      },
      {
        id: 5,
        title: "藪前知子 × 松江李穂 対談：日本の現代アートとキュレーション、美術館の20年【Tokyo Art Beat 20周年特集】",
        image: getYoutubeThumbnailUrl("9SiQBXckVow"),        
        link: "https://www.youtube.com/watch?v=9SiQBXckVow&t=2844s",
      },
      {
        id: 6,
        title: "デートに行くなら山派！ 宮沢氷魚さんに25の質問！｜25 Questions｜25ans",
        image: getYoutubeThumbnailUrl("1LbYyV0yP4A"),
        link: "https://www.youtube.com/watch?v=1LbYyV0yP4A",
      },
      {
        id: 7,
        title: "Tokyo Art Beat 新機能追加リリース広告動画制作",
        image: getYoutubeThumbnailUrl("cKwAV7Xj3Oc"),
        link: "https://www.youtube.com/shorts/cKwAV7Xj3Oc",
      },
      {
        id: 8,
        title: "ホットヨガロイブ",
        image: getYoutubeThumbnailUrl("Av1-ftZKwis"),
        link: "https://www.youtube.com/watch?v=Av1-ftZKwis",
      },
]