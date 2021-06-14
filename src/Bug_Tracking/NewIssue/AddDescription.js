import ReactQuill from 'react-quill';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function AddDescription({ info, setInfo }) {
  const [convertedText, setConvertedText] = useState(info.description);

  useEffect(() => {
    setInfo({ ...info, description: convertedText });
  }, [convertedText]);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={setConvertedText}
        style={{ height: '30%' }}
      />
    </div>
  );
}
