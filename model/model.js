import mongoose, { mongo } from 'mongoose';

try {
  await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING ?? "");
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

const jobSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  company: {type: String, required: true},
  location: {type: String, required: true},
  salary: {type: Number, required: true}
});

const Job = mongoose.model("Job", jobSchema);

const createJobPosting = async (jobData) => {
 const insertedData = await Job.create(jobData);
 return insertedData._id;
}

const getJobPosting = async () => {
  const jobList = await Job.find();
  return jobList;
}

const getSingleJobPosting = async (jobId) => {
  const job = await Job.findById(jobId);
  return job;
}

const updateJobPosting = async (jobId, jobData) => {
  const updatedData = await Job.findByIdAndUpdate(jobId, jobData);
  return updatedData._id;
}

const deleteJobPosting = async (jobId) => {
  await Job.deleteOne({_id: jobId});
}

export { createJobPosting, getJobPosting, getSingleJobPosting, updateJobPosting, deleteJobPosting }