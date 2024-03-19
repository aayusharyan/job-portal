import express from 'express';
// import bodyParser from 'body-parser';
import { createJobPostingController, getJobPostingController, getSingleJobPostingController, updateJobPostingController, deleteJobPostingController, displayJobPostings, displayNewJobPostingForm, displayEditJobPostingForm } from './controller/controller.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', displayJobPostings);
app.get('/add-job', displayNewJobPostingForm);
app.get('/edit-job', displayEditJobPostingForm);
app.post('/api/jobs', createJobPostingController);
app.get('/api/jobs', getJobPostingController);
app.get('/api/jobs/:id', getSingleJobPostingController);
app.put('/api/jobs/:id', updateJobPostingController);
app.delete('/api/jobs/:id', deleteJobPostingController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});