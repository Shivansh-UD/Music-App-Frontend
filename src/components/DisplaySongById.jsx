import { useState } from "react";
import { retriveSingleSong } from "./api/MusicApiService";
import './DisplaySongById.css';

export default function DisplaySongById() {
  const [songId, setSongId] = useState("");
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSong(null);

    try {
      const response = await retriveSingleSong(songId);
      setSong(response.data);
    } catch (err) {
      setError("Song not found or server error.");
    }
  };

  return (
    <div className="SongById">
      <h1>Find Song by ID</h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          placeholder="Enter song ID"
        />
        <button type="submit">Search</button>
      </form>

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Song Data */}
      {song && (
        <div className="song-details">
          <h2>Song Details</h2>
          <p><strong>ID:</strong> {song.id}</p>
          <p><strong>Name:</strong> {song.songName}</p>
          <p><strong>Artist:</strong> {song.artistName}</p>
          <p><strong>Length:</strong> {song.songLength}</p>
          <p><strong>Downloads:</strong> {song.downloads?.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
