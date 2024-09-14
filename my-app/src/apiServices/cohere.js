const cohere = require("cohere-ai");
cohere.init("API_KEY");



const resumes = [
  "some how call user's uploaded resume"
];

const jobListings = [
  "somehow go through Description field in Database to find matches"
];

async function getEmbeddings(texts) {
  const response = await cohere.embed({
    texts: texts,
    model: 'embed-multilingual-v2.0',
    truncate: 'RIGHT'
  });
  return response.body.embeddings;
}

function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

(async () => {
  try {
    const resumeEmbeddings = await getEmbeddings(resumes);
    const jobEmbeddings = await getEmbeddings(jobListings);

    const similarityMatrix = resumeEmbeddings.map(resumeVec => {
      return jobEmbeddings.map(jobVec => cosineSimilarity(resumeVec, jobVec));
    });

    // Match resumes to job listings
    similarityMatrix.forEach((similarities, resumeIdx) => {
      const bestMatchIdx = similarities.indexOf(Math.max(...similarities));
      console.log(
        `Resume ${resumeIdx} best matches with Job Listing ${bestMatchIdx} (Score: ${similarities[bestMatchIdx].toFixed(2)})`
      );
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
