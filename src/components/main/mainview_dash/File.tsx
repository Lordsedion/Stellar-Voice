import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MultipleFileUploader = () => {
  const [files, setFiles] = useState<any>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (filesList: FileList) => {
    const updatedFiles = [...files];
    for (let i = 0; i < filesList.length; i++) {
      const file = filesList[i];
      // Check if the file type is allowed
      if (isValidFileType(file)) {
        // Check if the file name already exists in the array
        if (!updatedFiles.some((existingFile: File) => existingFile.name === file.name)) {
          updatedFiles.push(file);
        }
      } else {
        console.log(`File type not allowed: ${file.name}`);
      }
    }
    setFiles(updatedFiles);
  };

  const isValidFileType = (file: File) => {
    const allowedTypes = ["application/pdf", "text/plain", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    return allowedTypes.includes(file.type);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    handleFiles(droppedFiles);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="file-upload" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="gp1-1">
        <form>
          <input 
            type="file" 
            onChange={handleUpload} 
            id="file-upload-1" 
            accept=".pdf, .txt, .doc, .docx"
          />
          <p 
            className="inp-cl-dv-1"
            onClick={() => {
              document.querySelector<HTMLInputElement>("#file-upload-1")?.click();
            }}
          >
            Click to upload file
          </p>
        </form>
        <div className="drop-area">
          <p>Drag and drop files here</p>
        </div>
        <div className="b-1-1">
          {files.length > 0 && (
            <ul className="fl-up-oj">
              {files.map((file: File, index: number) => (
                <li key={index} className="file-up-oj-1">
                  <span>{file.name}</span>
                  <small onClick={() => handleDeleteFile(index)}>
                    <FaTimes />
                  </small>
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default MultipleFileUploader;
