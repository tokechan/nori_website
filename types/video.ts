export interface VideoItem {
    id: string;
    title: string;
    thumbnailUrl: string;
    tags: Array<{
      name: string;
      url: string;
    }>;
  }
  
  