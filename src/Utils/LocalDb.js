const getallTimelineFromLocalDB = () => {
  const timeline = localStorage.getItem("timeline");
  return timeline ? JSON.parse(timeline) : [];
};

const addTimelineToLocalDB = (item) => {
  const alltimeline = getallTimelineFromLocalDB();

  const updated = [item, ...alltimeline]; 

  localStorage.setItem("timeline", JSON.stringify(updated));
};

export { getallTimelineFromLocalDB, addTimelineToLocalDB };