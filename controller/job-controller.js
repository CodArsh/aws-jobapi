import Job from "../models/job.js";
console.log("...inside");
export const saveJobData = async (request, response) => {
  try {
    const newJob = new Job(request.body);
    await newJob.save();
    response.status(200).json({ message: "Job saved successfully" });
  } catch (err) {
    console.log(err.message);
    response.status(500).json({ message: err.message });
  }
};

export const getJobData = async (request, response) => {
  try {
    const jobs = await Job.find({});
    response.status(200).json(jobs);
    console.log(jobs)
  } catch (err) {
    console.log(err.message);
    response.status(500).json({ message: err.message });
  }
};
