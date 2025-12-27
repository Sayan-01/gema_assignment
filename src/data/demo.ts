export interface ScoreData {
  overall: number;
  max: number;
  pronunciation: number;
  fluency: number;
  vocabulary: number;
  grammar: number;
 
}

export interface Candidate {
  userId: string;
  name: string;
  date: string;
  language: string;
  status: "Verified" | "Pending" | "Failed";
  tests: any;
}


export const demoData: Candidate = {
  userId: "demo_user_01",
  name: "Sayan Das",
  date: "Oct 14, 2024",
  language: "English (US)",
  status: "Verified",
  tests: {
    Speechace: {
      scale: 9,
      scores: {
        overall: 9,
        pronunciation: 8,
        fluency: 7,
        vocabulary: 9,
        grammar: 6,
      },
    },

    CEFR: {
      scale: 6,
      scores: {
        overall: 4,
        pronunciation: 5,
        fluency: 5,
        vocabulary: 4,
        grammar: 4,
      },
    },

    IELTS: {
      scale: 8,
      scores: {
        overall: 6.5,
        pronunciation: 7,
        fluency: 8,
        vocabulary: 6,
        grammar: 6,
      },
    },

    PTE: {
      scale: 9,
      scores: {
        overall: 7,
        pronunciation: 8,
        fluency: 6,
        vocabulary: 6,
        grammar: 8,
      },
    },

    TOEFL: {
      scale: 9,
      scores: {
        overall: 5,
        pronunciation: 8,
        fluency: 3,
        vocabulary: 7,
        grammar: 6,
      },
    },

    TOEIC: {
      scale: 9,
      scores: {
        overall: 7,
        pronunciation: 7,
        fluency: 6,
        vocabulary: 8,
        grammar: 5,
      },
    },
  },
};

