import React, { useEffect, useState } from "react";

function getTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function TimeAndPhotos() {
  const [time, setTime] = useState(getTime());

  const [photo, setPhoto] = useState("");
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const fetchImage = async () => {
    if (paused) return;
    const response = await fetch("https://picsum.photos/200");
    const data = await response.blob();
    const url = URL.createObjectURL(data);
    setPhoto(url);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // if paused is true, then we don't want to fetch the image
    if (paused) return;
    fetchImage();
    const interval = setInterval(() => {
      fetchImage();
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const togglePause = () => {
    setPaused((paused) => !paused);
  };

  const toggleModal = () => {
    setOpen((open) => !open);
  };

  return !photo ? (
    <div>Loading</div>
  ) : (
    <>
      <div>{time}</div>
      <button onClick={toggleModal}>Open modal</button>
      {open && (
        <dialog open={open}>
          <input type="number" onChange value={counter} />
          <button onClick={toggleModal}>Close modal</button>

          <img src={photo} alt="random" />
          <p>Contador: {counter}</p>
        </dialog>
      )}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img onClick={togglePause} height={200} width={200} src={photo} alt="random" />
        <div>Is paused: {JSON.stringify(paused)}</div>
      </div>
    </>
  );
}

export default TimeAndPhotos;
