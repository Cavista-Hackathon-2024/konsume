import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import React, { useContext, useState } from 'react'
import SetupContext from '../../context/SetupContext';
import upload from "../../assets/upload.png"

const ScannerBody = () => {
  const API_KEY = import.meta.env.VITE_GEMINI_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const [image, setImage] = useState(null);
  const [bitImage, setBitImage] = useState('');
  const [result, setResult] = useState('');
  const { userGoal, setUserGoal, userDiseases, setUserDiseases, name, age, gender, weight, setAge, setGender, setWeight, setName } = useContext(SetupContext);
  const [queryText, setQueryText] = useState(`Whats in this image? Is it a food? What is in this food? with my information like my goal of ${userGoal}, health conditions i have like ${userDiseases.join(', ')}`);

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.NONE,
    },
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    getBase64(file).then(file => {
      setImage(file);
    }).catch(e => console.log(e))

    generativeFile(file).then(
      (img) => {
        setBitImage(img);
      }
    )
  };

  const generativeFile = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }
  const getBase64 = (file) => new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject('Error: ', error);
  })

  const handleRecognize = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      queryText, bitImage
    ], safetySettings);
    const response = await result.response;
    const text = response.text();
    setResult(text);
  };
  return (
    <div>
      <div className='border-[2.6px] border-[#097F5B] flex flex-col md:flex-row gap-3 items-center justify-between bg-[#E0F6EF] md:w-[450px] py-6 rounded-[19.7px] mx-auto'>
        <img src={image} alt="img" className='w-[150px] rounded-md flex-[.5]' />

        <div className='flex flex-col gap-4 items-center flex-[.5] border border-[grey]'>
          <img src={upload} alt="upload" />
          <p>Upload Image.</p>
          <p>Drag and Drop files or...</p>
          <div class="file-input-wrapper">
            <input type="file" id="fileInput" onChange={handleImageChange} />
            <label class="file-input-label" for="fileInput">Choose a file</label>
          </div>
          <div id="fileName"></div>
        </div>

      </div>
      <button className=' p-4 w-fit bg-[#B0D2C1] mx-auto flex mt-3' onClick={handleRecognize} >Recognize Image</button>
      <p>Result: {result}</p>
    </div>
  )
}

export default ScannerBody