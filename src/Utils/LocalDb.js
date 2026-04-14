const getallTimelineFromLocalDB = () => {
  const timeline = localStorage.getItem("timeline");
  return timeline ? JSON.parse(timeline) : [];
};

const addTimelineToLocalDB = (item) => {
  const alltimeline = getallTimelineFromLocalDB();

  alltimeline.push(item);

  localStorage.setItem("timeline", JSON.stringify(alltimeline));
};

export { getallTimelineFromLocalDB, addTimelineToLocalDB };