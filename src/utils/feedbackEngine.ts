export const getFeedbackForScore = (score: number) => {
  if (score >= 8) {
    return {
      text: "Excellent performance with strong control.",
      detail: "Your command over the language is native-like. You navigate complex structures with ease and maintain a sophisticated flow throughout the assessment.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    };
  } else if (score >= 6) {
    return {
      text: "Good performance with minor inaccuracies.",
      detail: "You communicate effectively on a wide range of topics. While there are occasional slips in precision, your overall intelligibility and coherence remain strong.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    };
  } else {
    return {
      text: "Needs improvement.",
      detail: "Focused practice on core fundamentals is recommended. Increasing exposure to native speakers and practicing structured responses will help boost your confidence and accuracy.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    };
  }
};

export const getSpecificFeedback = (skill: string, score: number) => {
  const base = getFeedbackForScore(score);

  const skillDetails: Record<string, string> = {
    Pronunciation:
      score >= 8
        ? "Uses a wide range of pronunciation features. Sustains flexible use of features, with only occasional lapses."
        : "Standard pronunciation with clear articulation, though some regional influence is perceptible.",
    Fluency:
      score >= 8
        ? "Speaks fluently with only rare repetition or self-correction. Cohesion is natural and effortless."
        : "Generally good flow but may take occasional pauses to search for specific lexical items.",
    Vocabulary:
      score >= 6
        ? "Uses a sufficient range to allow flexibility and precision. Demonstrates ability to use less common items."
        : "Basic vocabulary is well-utilized, but could benefit from more idiomatic and varied word choices.",
    Grammar: score >= 6 ? "Uses a mix of simple and complex structures with reasonable accuracy." : "Relies mostly on simple sentence structures. Some errors in complex tense usage observed.",
  };

  return {
    ...base,
    detail: skillDetails[skill] || base.detail,
  };
};
