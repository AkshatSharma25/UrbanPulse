import React from 'react';
import axios from 'axios'
const FileUploadForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', e.target.file.files[0]);

    try {
      const response = await axios.post('http://localhost:3050/upload',formData);
      // const data = await response.json();
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upload a File</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="file"
            name="file"
            id="file"
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </div>
      </form>
      
      <div className='w-64 h-64 bg-red-400'>
        <img src={`http://localhost:3050/uploads/file-1721288332707.jpeg`} alt="not found!" />
      </div>
    </div>
  );
};

export default FileUploadForm;
