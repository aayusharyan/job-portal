import { createJobPosting, getJobPosting, getSingleJobPosting, updateJobPosting, deleteJobPosting } from "../model/model.js"

const createJobPostingController = async (req, res) => {
  const body = req.body;
  try {
    const newJobPostId = await createJobPosting(body);
    res.send(newJobPostId);
  } catch (error) {
    res.status(500).send("The input is invalid");
  }
}

const getJobPostingController = async (_, res) => {
  const jobList = await getJobPosting();
  res.send(jobList);
}

const getSingleJobPostingController = async (req, res) => {
  const jobId = req.params.id;
  const job = await getSingleJobPosting(jobId);
  res.send(job);
}

const updateJobPostingController = async (req, res) => {
  const jobId = req.params.id;
  const body = req.body;
  try {
    const updatedJobId = await updateJobPosting(jobId, body);
    res.send(updatedJobId);
  } catch(e) {
    res.status(500).send("The input is invalid");
  }
}

const deleteJobPostingController = async (req, res) => {
  const jobId = req.params.id;
  try {
    await deleteJobPosting(jobId);
    res.send("Job posting deleted");
  } catch(e) {
    console.log(e);
    res.status(500).send("The input is invalid");
  }
}

// Following methods are for Views.

const displayJobPostings = async (_, res) => {
  res.render('index');
}

const displayNewJobPostingForm = async (_, res) => {
  res.render('newJob');
}

const displayEditJobPostingForm = async (_, res) => {
  res.render('editJob');
}

export {
  createJobPostingController,
  getJobPostingController,
  getSingleJobPostingController,
  updateJobPostingController,
  deleteJobPostingController,
  displayJobPostings,
  displayNewJobPostingForm,
  displayEditJobPostingForm
}