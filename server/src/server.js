import { app } from "./app.js";
import "dotenv/config";

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api is Working");
});

app.listen(port, () => console.log("Server Started at ", port));

// app.post('/upload', upload.array('files', 5), async (req, res) => {
//     try {
//         if (!req.files || req.files.length === 0) {
//             return res.status(400).json({ error: 'No files uploaded' });
//         }

//         const uploadedFiles = req.files.map(file => ({
//             url: file.path,
//             fileType: file.mimetype,
//         }));

//         // Save files to MongoDB
//         await File.insertMany(uploadedFiles);

//         res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFiles });
//     } catch (error) {
//         res.status(500).json({ error: 'File upload failed', details: error.message });
//     }
// });
